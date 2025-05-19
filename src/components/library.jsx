export const getCategories = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error :", error.message);

    return null;
  }
};

export const getProducts = async (id) => {
  try {
    let API = "https://api.escuelajs.co/api/v1/products/";
    if (id) {
      API += id;
    }
    const response = await fetch(API);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error : "), error.message;

    return null;
  }
};
