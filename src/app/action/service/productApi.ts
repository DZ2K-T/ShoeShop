export const fecthData = async () => {
  try {
    const result = await fetch(
      "https://apistore.cybersoft.edu.vn/api/Product",
      {
        next: { revalidate: 10 },
      }
    );
    const data = await result.json();
    return data.content;
  } catch (error) {
    console.log(error);
  }
};

export const fectDetail = async (id: string) => {
  try {
    const result = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`
    );
    const data = await result.json();
    return data.content;
  } catch (error) {
    console.log(error);
  }
};

export const fecthSearch = async (key: string) => {
  try {
    const result = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product?keyword=${key}`
    );
    const data = await result.json();
    return data.content;
  } catch (error) {
    console.log(error);
  }
};
