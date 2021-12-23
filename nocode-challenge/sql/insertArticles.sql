INSERT INTO article(sku, "internalName", "introducedAt", "articleCategoryId") VALUES
('sku1','Very nice product', now(), 1);

INSERT INTO feature_to_article("articleId", "articleFeatureTypeId", feature) VALUES
(1,1,'{"productName":"TollesProdukt (TM)"}'),
(1,2,'{"ingredients":"Erbsen, Wasser, Öl, Gewürze"}'),
(1,3,'{"allergens":"Gluten"}'),
(1,4,'{"energyKJ":"0", "energyKcal":"0", "fat":"0", "ofWhichSaturates ":"0", "carbohydrate":"0", "ofWhichSugars":"0", "fibre":"0", "protein ":"0", "salt":"0", "vitaminB12":"0", "iron ":"0"}'),
(1,5,'{"preparation":"yes, please"}'),
(1,6,'{"vLabel":"license number"}'),
(1,7,'{"kosher":true}'),
(1,8,'{"halal":true}'),
(1,9,'{"companyName":"FoodCompany", "streetName":"Food Road", "houseNumber ": 1, "zipCode":8888, "city":"Zurich", "country ":"Switzerland"}');