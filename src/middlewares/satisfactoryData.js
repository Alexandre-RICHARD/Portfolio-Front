export const data = {
    resources: {
        ironIngot: {
            id: 1,
            englishName: "Iron Ingot",
            frenchName: "Lingot de Fer",
            recipes: [
                {
                    machinery: "smelter",
                    outputSize: 1,
                    craftDuration: 2,
                    input: [
                        ["ironOre", 1]
                    ]
                }
            ]
        },
        ironPlate: {
            id: 2,
            englishName: "Iron Plate",
            frenchName: "Plaque de Fer",
            recipes: [
                {
                    machinery: "constructor",
                    outputSize: 2,
                    craftDuration: 6,
                    input: [
                        ["ironIngot", 3]
                    ]
                }
            ]
        }
    },
    machinery: {

    },
};