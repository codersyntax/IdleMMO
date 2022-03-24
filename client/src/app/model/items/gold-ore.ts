import { Gatherable } from "./gatherable";
import { Item, ItemType } from "./item";

export class GoldOre implements Item, Gatherable 
{
    public Name: string = "Gold Ore";
    public Type: ItemType = ItemType.Material;
    public Description: string = "Its gold...";
    public Value: number = 10;
    public IsRawMaterial: boolean = true;
    public LevelRequirement: number = 10;
}