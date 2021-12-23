import {Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { ApprovalStatus } from "./Enums"
import { ArticleFeatureApplicability } from "./ArticleFeatureApplicability"

@Entity()
@Unique("uq_article_categories",["internalName"])
export class ArticleCategory {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    internalName: string;

    @Column({
        type: "timestamp with time zone"
    })
    introducedAt: Date;

    @Column({ nullable: true })
    comment: string;


    @OneToMany(() => ArticleFeatureApplicability, articleFeatureApplicability => articleFeatureApplicability.articleCategoryId)
    public articleFeatureApplicability!: ArticleFeatureApplicability[];
} 