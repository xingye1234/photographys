export const GET = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return Promise.reject(error)
  }
};

export const POST = async (url: string, data: any) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const datas = await res.json();
        return datas;
      } catch (error) {
        return Promise.reject(error)
      }
};

export const PUT = async (url: string, data: any) => {
    try {
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const datas = await res.json();
        return datas;
      } catch (error) {
        return Promise.reject(error)
      }
};

export const DELETE = async (url: string) => {
    try {
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const datas = await res.json();
        return datas;
      } catch (error) {
        return Promise.reject(error)
      }
};