export type UserType = {
    userId: number;
    firstName: string;
    username: string;
    password: string;
    token: string
};

interface Ingredient {
   name: string;
   quantity:string;
}

export type RecipeType = {
    recipeId: number;
    userId: number;
    recipeName: string;
    imageUrl: string;
    ingredients: Ingredient [];
    instructions: string [];
};

