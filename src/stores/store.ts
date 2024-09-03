import { create } from "zustand";

type FeaturesStore = {
  inViewFeature: string | null;
  setInViewFeature: (feature: string | null) => void;
};

export const useFeatureStore = create<FeaturesStore>((set) => ({
  inViewFeature: "q1",
  setInViewFeature: (feature: string | null) => set({ inViewFeature: feature }),
}));
