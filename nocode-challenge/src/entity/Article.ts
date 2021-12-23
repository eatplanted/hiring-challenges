import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Unique } from "typeorm"
import { ArticleCategory } from "./ArticleCategory"
import { FeatureToArticle } from "./FeatureToArticle"
import { ApprovalStatus } from "./Enums"


// Article describes a single article in the database, and its relationship to the Article Categories as well as Article Feature Types
// An article belongs to one and only one article category
// An article can have many features. A feature is thematically closed set of properties describing an article, like "Nutritional Values"
// Features are defined in Article Feature Types - note that this is only the definition of a feature not its values for a specific article
//      - Example "Nutritional Values" feature. It is defined as an object with properties "Energy [kJ]", "Carbohydrates [g/100g]", "Fat [g/100g]" etc
//      - Different articles may have different values for this feature, but this values are not stored in Article Feature Types
// Which Features an Article requires to be complete depends on the article's category, and is defined in ArticleFeatureApplicability
// The actual feature values are stored in FeatureToArticle

@Entity()
@Unique("uq_articles",["internalName"])
@Unique("uq_sku",["sku"])
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sku: string;
    
    @Column()
    internalName: string;

    @Column({
        type: "timestamp with time zone"
    })
    introducedAt: Date;

    @Column({
        type: "timestamp with time zone",
        nullable: true
    })

    @Column({nullable: true})
    comment: string;

    @ManyToOne(() => ArticleCategory, articleCategory => articleCategory.id)
    public articleCategory!: ArticleCategory;

    @OneToMany(() => FeatureToArticle, featureToArticle => featureToArticle.articleId)
    public featureToArticle!: FeatureToArticle[];
}