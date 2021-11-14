export class Item {
    id: string;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    featured: boolean;

    constructor(id: string, name: string, image: string, category: string, label: string, price: string, description: string, featured: boolean) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.category = category;
        this.label = label;
        this.price = price;
        this.description = description;
        this.featured = featured;
    }
}
