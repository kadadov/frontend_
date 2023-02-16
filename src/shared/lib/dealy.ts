export const dealy = async (ms = 1000): Promise<any> => {
    return await new Promise((resolve) => setTimeout(resolve, ms));
};
