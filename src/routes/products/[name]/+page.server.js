export async function load({ params }) {
    const data = await import(`$lib/content/products/${params.name}.json`);
    console.log(data)
    return { data: data.default };
}