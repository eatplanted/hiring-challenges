import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique} from "typeorm";
import { ArticleFeatureType} from "./ArticleFeatureType";
import { Article } from "./Article";



@Entity()
@Unique("uq_article_feature_records",["articleId","articleFeatureTypeId","localeId"])
export class FeatureToArticle {
    @PrimaryGeneratedColumn()
    public id: number;
    
    @Column()
    public articleId: number;

    @Column()
    public articleFeatureTypeId: number;

    @Column({
        type: 'jsonb',
        array: false
    })
    public feature: JSON

    @ManyToOne(() => Article, article => article.featureToArticle)
    public article!: Article[];

    @ManyToOne(() => ArticleFeatureType, articleFeatureType => articleFeatureType.featureToArticle)
    public articleFeatureType!: ArticleFeatureType[];

}