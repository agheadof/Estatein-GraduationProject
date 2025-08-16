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
            cardTitle: email,
            cardImg: "/assets/icons/CardUnderHero/email.svg",
            HeadingTag: Link,
            titleLink: "/",
        },
        {
            cardTitle: phone,
            cardImg: "/assets/icons/CardUnderHero/phone.svg",
            HeadingTag: Link,
            titleLink: "/",
        },
        {
            cardTitle: branch,
            cardImg: "/assets/icons/CardUnderHero/location.svg",
            HeadingTag: Link,
            titleLink: "/",
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
            cardImg: "assets/icons/CardUnderHero/estatein.svg",
            HeadingTag: Link,
            links: [
                {
                    title: instagram || "No instagram",
                    link: instagramUrl
                },
                {
                    title: linkedin || "No linkedin",
                    link: linkedinUrl,
                },
                {
                    title: facebook || "No facebook",
                    link: facebookUrl,

                },
            ],
        },
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