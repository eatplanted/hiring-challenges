import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique} from "typeorm"
import { ArticleFeatureType } from "./ArticleFeatureType"
import { ArticleCategory } from "./ArticleCategory"
import { FeatureApplicability } from "./Enums" 


@Entity()
@Unique("uq_article_feature_associations",["articleCategoryId","articleFeatureTypeId"])
export class ArticleFeatureApplicability {
    @PrimaryGeneratedColumn()
    public id: number;
    
    @Column()
    public articleCategoryId: number;

    @Column()
    public articleFeatureTypeId: number;

    @Column({
        type: "enum",
        enum: FeatureApplicability
    })
    public applicability:  FeatureApplicability

    @ManyToOne(() => ArticleCategory, articleCategory => articleCategory.articleFeatureApplicability)
    public articleCategory!: ArticleCategory[];

    @ManyToOne(() => ArticleFeatureType, articleFeatureType => articleFeatureType.articleFeatureApplicability)
    public articleFeatureType!: ArticleFeatureType[];
}