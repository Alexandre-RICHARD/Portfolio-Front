export const data = {
    resources: {
        ironIngot: {
            id: 1,
            name: "ironIngot",
            englishName: "Iron Ingot",
            frenchName: "Lingot de Fer",
            recipes: [
                {
                    machinery: "smelter",
                    outputSize: 1,
                    craftDuration: 2,
                    input: [["ironOre", 1, "primary"]],
                },
            ],
        },
        ironPlate: {
            id: 2,
            name: "ironPlate",
            englishName: "Iron Plate",
            frenchName: "Plaque de Fer",
            recipes: [
                {
                    machinery: "constructor",
                    outputSize: 2,
                    craftDuration: 6,
                    input: [["ironIngot", 3, "secondary"]],
                },
            ],
        },
        ironRod: {
            id: 3,
            name: "ironRod",
            englishName: "Iron Rod",
            frenchName: "Tige de Fer",
            recipes: [
                {
                    machinery: "constructor",
                    outputSize: 1,
                    craftDuration: 4,
                    input: [["ironIngot", 1, "secondary"]],
                },
            ],
        },
        screw: {
            id: 4,
            name: "screw",
            englishName: "Screw",
            frenchName: "Vis",
            recipes: [
                {
                    machinery: "constructor",
                    outputSize: 4,
                    craftDuration: 6,
                    input: [["ironRod", 1, "secondary"]],
                },
            ],
        },
    },
    machinery: {},
};
