export interface Wine {
    id: string;
    winery: string;
    wine: number;
    rating: {
        average: string;
        reviews: string;
    };
    location: number;
    image: string;
}