import { FilterTypes } from "./filter-types";

export class ModelFilterBox {
    
    constructor(
        public Type:string,
        public Subject:string,
        public FromLocation:string,
        public ToLocation:string,
        public Time:string,
        public Types: FilterTypes[]
    ){}
}
