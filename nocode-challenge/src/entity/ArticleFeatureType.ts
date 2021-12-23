import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, Unique} from "typeorm";
import { FeatureToArticle } from "./FeatureToArticle";
import { ArticleFeatureApplicability } from "./ArticleFeatureApplicability"

@Entity()
@Unique("uq_article_feature_types",["articleFeatureName","schema"])
export class ArticleFeatureType {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    articleFeatureName: string;

    @Column({nullable: true})
    description: string;

    @Column({default: false})
    requiresTranslation: boolean;

    @Column({
        type: "timestamp with time zone"
    })
    introducedAt: Date;

    @Column({
        type: 'jsonb',
        array: false
    })
    schema: JSON;

    @OneToMany(() => FeatureToArticle, featureToArticle => featureToArticle.articleFeatureTypeId)
    public featureToArticle!: FeatureToArticle[];


    @OneToMany(() => ArticleFeatureApplicability, articleFeatureApplicability => articleFeatureApplicability.articleCategoryId)
    public articleFeatureApplicability!: ArticleFeatureApplicability[];
}