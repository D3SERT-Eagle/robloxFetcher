import { IsArray, ArrayNotEmpty, IsString } from "class-validator";
//Validate inputs for Empty arrays, string and general array structure.
export class FetchGamesDto {
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each:true })
    urls: string[];
}
