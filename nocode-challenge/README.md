# nocode-challenge
Data model for nocode-challenge.

Setup typeORM (see https://typeorm.io/#/), appsmith (https://docs.appsmith.com/setup, via docker), postgres.

Important: So that your locally running appsmith instance can connect to your local postgres database, you need to allow docker to connect to the database. Do this by modifying the file pg_hba.conf, adding:
```
# TYPE  DATABASE                            USER                        ADDRESS                 METHOD

host    <your database name here>       <your database userhere>         172.17.0.0/8            md5 # allow docker container
```
See https://gist.github.com/MauricioMoraes/87d76577babd4e084cba70f63c04b07d for more info.

Steps to setup database schema:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command to create database tables

The database schema should look like this (the name of the owner depends on how you set up your local db):

|Schema |                 Name                 |   Type   |        Owner         |
|-------|--------------------------------------|----------|----------------------|
|public | article                              | table    | articledb_challenge  |
|public | article_category                     | table    | articledb_challenge  |
|public | article_category_id_seq              | sequence | articledb_challenge  |
|public | article_feature_applicability        | table    | articledb_challenge  |
|public | article_feature_applicability_id_seq | sequence | articledb_challenge  |
|public | article_feature_type                 | table    | articledb_challenge  |
|public | article_feature_type_id_seq          | sequence | articledb_challenge  |
|public | article_id_seq                       | sequence | articledb_challenge  |
|public | feature_to_article                   | table    | articledb_challenge  |
|public | feature_to_article_id_seq            | sequence | articledb_challenge  |

Run the sql commands in insertFeatures, insertCategories, insertApplicability and insertArticles.sql (in that order) to insert basic values to get started.

## Database Schema

Table article represents the single article records. Each article must have a unique name, and a unique SKU (article code, or stock keeping unit). Each article belongs to one article category, therefore has a expressed by a foreign key constraint on article category ID. Each article also has many features: they are kept in feature_to_article, which stores the feature values, of which type the feature is and of course to which article the feature record belongs (again, foreign key constraints). The feature types are stored in article_feature_type, which, importantly, contains a json schema of how a specific is supposed to look like:
```
{"fields":[{"name": <feature name>, "type": <data type, e.g. int>, "regex": <regex for validating user input in frontend>,"unitOfMeasurement": <e.g. grams>, "help": <help text for frontend>}]}
```
Which feature types apply to an article depends on the category the article belongs to - for example, all food articles require information on ingredients. This is encoded in article_feature_applicability.

## The Challenge

### General Remarks

There are many tasks you can choose from. It is not expected that you solve everything! Rather, the many tasks are there so you can choose what interests you the most. Focus on what you think is the most interesting. You expressly do not have to spend too much time on this. Rather, document your thinking and choices.

### Scenario

The departments Quality Assurance (QA), Supply Chain Management, Marketing and New Product Development require a database to hold all relevant information on articles produced or used at FoodCompany. Two important things need to be balanced:
 - Flexibility of the database - it needs to be possible to flexibly define and update what article data the database can hold. An article has no universally valid set of attributes - food articles are very different from packaging materials or merchandise, and on top of that, what defines an article may change with time. For example, QA may have to introduce new safety measurements on food products when food safety  laws change, or when introducing a new, gluten-free product line. Marketing may buy all sorts of merchandise, with very different properties (ranging from paper flyers to skateboards).
 - Data integrity - making sure that when entering, joining, updating or deleting data no wrong records result.
Trying to achieve this balance, above schema was created.

Now however food products are to be exported to different countries - therefore some article information need to be translated into different languages, (e.g. product name, or the preparation recommendation). QA has provided a list of features, including a flag whether or not they need to be translatable.

### Your Tasks

#### DB Schema Part

- Study the database schema. What makes it flexible, what ensures data completeness and integrity? What are weaknesses of this design? Hint: The real world changes all the time. Make a proposal how to deal with this weaknesses (bonus points).

- Make a schematic proposal of how to extend the database to accomodate translated features (just the concept). Clarification: Not all features require a translation (see field "requiresTranslation" in article_feature_type table). But if an article requires certain translations (e.g. english and french), the features that require translations need to be translated to all these languages (english and french). So you need to store which article needs which translations.

- Extend the typeORM database schema (defined in this repo) so that it can accomodate translated features. Make sure that one can retrieve records by the language they are written in, and that one can get an overview of what languages exist for each record.


#### UI Part

- Provide a dashboard in appsmith that allows seeing all articles and the information available on each article. (You can use insertArticles as a template to insert more articles). Users need to be able to filter by article internalName, SKU.

- Provide a user interface built in appsmith that allows entering new articles (don't worry about article categories or feature types, they already exist). Make sure that if a user enters an article record this record is complete.  You can even validate feature values using the regex expression contained in the feature type definition schema (bonus points). How did you address data integrity and usability?

- Add the possibility to enter translated features to the UI above (bonus points).