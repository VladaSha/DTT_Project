export type RecipeType = {
  recipe: {
    label: string;
    image: string;
    url: string;
    uri: string;
    sourse: string;
    dietLabels: string[],
    healthLabels: string[],
    calories: number,
    yield: number;
    totalTime: number,
    ingredientLines: string[]
  }
};
