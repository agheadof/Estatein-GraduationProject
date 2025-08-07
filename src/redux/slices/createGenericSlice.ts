import { createSlice, type Draft, type SliceCaseReducers } from "@reduxjs/toolkit";
import { createFetchThunk } from "../thunks/createFetchThunk";

export interface GenericState<T> {
  items: T[];
  visibleItems: T[];
  loading: boolean;
  error: string | null;
  itemsPerPage: number;
  currentPage: number;
}

interface CreateGenericSliceOptions<T, R, State> {
  name: string;
  transform?: (item: T, id: string) => R;
  itemsPerPage?: number;
  reducers?: SliceCaseReducers<State & GenericState<R>>;
  extraInitialState?: Partial<State & GenericState<R>>;
}

export const createGenericSlice = <T, R, State = {}>({
  name,
  transform,
  itemsPerPage = 3,
  reducers: customReducers,
  extraInitialState = {},
}: CreateGenericSliceOptions<T, R, State>) => {
  const fetchEntities = createFetchThunk(name, transform);

  const initialState: GenericState<R> & State = {
    items: [],
    visibleItems: [],
    loading: false,
    error: null,
    itemsPerPage,
    currentPage: 1,
    ...extraInitialState,
  } as GenericState<R> & State;

  const slice = createSlice({
    name,
    initialState,
    reducers: {
      paginate: (state, action: { payload: number }) => {
        const page = action.payload;
        const startIndex = (page - 1) * state.itemsPerPage;
        const endIndex = startIndex + state.itemsPerPage;
        state.currentPage = page;
        state.visibleItems = state.items.slice(startIndex, endIndex);
      },
      ...customReducers,
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchEntities.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchEntities.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload as unknown as Draft<R>[];
          const startIndex = (state.currentPage - 1) * state.itemsPerPage;
          const endIndex = startIndex + state.itemsPerPage;
          state.visibleItems = state.items.slice(startIndex, endIndex);
        })
        .addCase(fetchEntities.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Failed to load data";
        });
    },
  });

  return { slice, fetchEntities, actions: slice.actions };
};