
CREATE DATABASE  `burgersdb`;
  USE  `burgersdb`;
   CREATE TABLE  `burgers`  (
     id  iINT AUTO_INCREMENT PRIMARY KEY,
     burger VARCHAR(100),
     about VARCHAR(250),
     devoured  BOOLEAN
   );