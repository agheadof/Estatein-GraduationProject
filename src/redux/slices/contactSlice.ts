import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CommonCardProps } from "../../types/CommonCard";
import { Link } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebaseConfig";

type ContactState = {
    cards: CommonCardProps[];
    loading: boolean;
};

const initialState: ContactState = {
    cards: [],
    loading: true,
};

// Thunk
export const listenToCardData = createAsyncThunk(
    "contactLinks/listenToCardData",
    async (_, thunkAPI) => {
        const { dispatch } = thunkAPI;

        let contactCards: CommonCardProps[] = [];
        let socialLinksCards: CommonCardProps[] = [];

        const updateIfReady = () => {
            if (contactCards.length && socialLinksCards.length) {
                const finalCards = [...contactCards, ...socialLinksCards];
                dispatch(setCardData(finalCards));
                dispatch(setLoading(false));
            }
        };

        const contactRef = ref(db, "locations");
        onValue(contactRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const firstItem = Object.values(data)[0];
                contactCards = transformContactData(firstItem);
                updateIfReady();
            }
        });

        const socialRef = ref(db, "socialLinks");
        onValue(socialRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const allItems = Object.values(data);
                socialLinksCards = transformSocialData(allItems);
                updateIfReady();
            }
        });
    }
);

export const transformContactData = (contactData: any): CommonCardProps[] => {
    const email = contactData?.email || "No Email";
    const phone = contactData?.phone || "No Phone";
    const branch = contactData?.branch || "No Phone";

    return [
        {
            cardTitle_1: email,
            cardImg: "/assets/icons/CardUnderHero/email.svg",
            HeadingTag: Link,
            titleLink_1: "/",
        },
        {
            cardTitle_1: phone,
            cardImg: "/assets/icons/CardUnderHero/phone.svg",
            HeadingTag: Link,
            titleLink_1: "/",
        },
        {
            cardTitle_1: branch,
            cardImg: "/assets/icons/CardUnderHero/location.svg",
            HeadingTag: Link,
            titleLink_1: "/",
        },
    ];
};

const transformSocialData = (socialData: any): CommonCardProps[] => {
    const linkedin = socialData[0].platform;
    const facebook = socialData[1].platform;
    const instagram = socialData[4].platform;
    const linkedinUrl = socialData[0].url;
    const facebookUrl = socialData[1].url;
    const instagramUrl = socialData[4].url;
    return [
        {
            cardTitle_1: instagram || "No instagram",
            cardTitle_2: linkedin || "No linkedin",
            cardTitle_3: facebook || "No facebook",
            cardImg: "assets/icons/CardUnderHero/estatein.svg",
            HeadingTag: Link,
            titleLink_1: instagramUrl,
            titleLink_2: linkedinUrl,
            titleLink_3: facebookUrl,
            
        }
        
    ];
    
};


// Slice
const contactLinksSlice = createSlice({
    name: "contactLinks",
    initialState,
    reducers: {
        setCardData: (state, action: PayloadAction<CommonCardProps[]>) => {
            state.cards = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    },
});

export const { setCardData, setLoading } = contactLinksSlice.actions;
export default contactLinksSlice.reducer;