export type UserType = {
    userId: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    token: string
};

export type Ingredient = {
   name: string;
   quantity:string;
}

export type RecipeType = {
    recipeId: string;
    userId: number;
    recipeName: string;
    imageUrl: string;
    ingredients: Ingredient [];
    instructions: string [];
};

