-- MySQL dump 10.15  Distrib 10.0.34-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: phone_api
-- ------------------------------------------------------
-- Server version	10.0.34-MariaDB-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `surname` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `second_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `pass` varchar(200) NOT NULL,
  `tmp_code` int(200) DEFAULT NULL,
  `b_date` date NOT NULL,
  `active` int(2) NOT NULL DEFAULT '1',
  `id_phone` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (6,'Попытаев','Владимир','Николаевич','showjackajacksona@gmail.com','89068513783','e10adc3949ba59abbe56e057f20f883e',4697,'1998-06-16',1,1);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `my_tree`
--

DROP TABLE IF EXISTS `my_tree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `my_tree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `left_key` int(11) NOT NULL DEFAULT '0',
  `right_key` int(11) NOT NULL DEFAULT '0',
  `level` int(11) NOT NULL DEFAULT '1',
  `name` varchar(150) NOT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `ip_adress` varchar(100) DEFAULT NULL,
  `type` int(2) NOT NULL DEFAULT '0',
  `status` int(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `left_key` (`left_key`,`right_key`,`level`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `my_tree`
--

LOCK TABLES `my_tree` WRITE;
/*!40000 ALTER TABLE `my_tree` DISABLE KEYS */;
INSERT INTO `my_tree` VALUES (1,1,42,1,'Россия',NULL,NULL,0,0),(2,2,17,2,'Уральский ФО',NULL,NULL,0,0),(3,18,31,2,'Центральный ФО',NULL,NULL,0,0),(4,32,41,2,'Северо-Западный ФО',NULL,NULL,0,0),(5,3,16,3,'Челябинская область',NULL,NULL,0,0),(6,19,20,3,'Московская область',NULL,NULL,0,0),(7,21,28,3,'Воронежская область',NULL,NULL,0,0),(8,29,30,3,'Белгородская область',NULL,NULL,0,0),(9,33,40,3,'Архангельская область',NULL,NULL,0,0),(11,4,5,4,'Агаповский район',NULL,NULL,0,0),(12,22,23,4,'Воронеж',NULL,NULL,0,0),(13,24,25,4,'Россошь',NULL,NULL,0,0),(14,26,27,4,'Нововоронеж',NULL,NULL,0,0),(15,36,37,4,'Архангельск',NULL,NULL,0,0),(16,34,35,4,'Котляс',NULL,NULL,0,0),(19,10,11,4,'Магнитогорск','/uploads/google_translate_copyrighted-512.png','192.168.0.130:3009',2,2),(21,38,39,4,'Новый город',NULL,NULL,0,0),(23,14,15,4,'Новый элемент',NULL,NULL,0,0);
/*!40000 ALTER TABLE `my_tree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL DEFAULT 'Новая новость',
  `photo` varchar(200) NOT NULL DEFAULT 'no_photo.jpg',
  `body` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (35,'Кончились новости, пока я тестил удаление.','/uploads/34.png','<abz>Круто, можно огромные пнгехи вставлять.</abz><img src=\"/uploads/Снимок экрана от 2018-04-18 12-39-00.png\"><abz>Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. Тольконые задачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. </abz><img src=\"/uploads/Снимок экрана от 2018-04-23 18-50-09.png\"><abz>дачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. Только нужно не забыть  остальные задачи. </abz>'),(36,'Новая новость','/uploads/4170177-color-gradient-wallpaper-hd.jpg','<abz>Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость </abz><img src=\"/uploads/New Project.png\"><abz>Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость </abz><img src=\"/uploads/New Project (1).png\"><abz>Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость </abz><img src=\"/uploads/New Project (2).png\"><abz>Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость Новая новость </abz>'),(37,'Эх я устал(ред)','/uploads/original.png','<abz>(ред)Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал </abz><img src=\"/uploads/New Project (2).png\"><abz>Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал Очень устал </abz><img src=\"/uploads/google_translate_copyrighted-512.png\"><abz>Всё отредактировал</abz><img src=\"/uploads/original.png\"><abz>И даже новое докинул</abz>'),(38,'Брум брум','/uploads/03.png','<abz>Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум </abz><img src=\"/uploads/Снимок экрана от 2018-04-18 12-38-29.png\"><abz>Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум Брум брум </abz>');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phone`
--

DROP TABLE IF EXISTS `phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(200) NOT NULL,
  `product` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `os` varchar(100) DEFAULT NULL,
  `ip` varchar(100) DEFAULT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phone`
--

LOCK TABLES `phone` WRITE;
/*!40000 ALTER TABLE `phone` DISABLE KEYS */;
INSERT INTO `phone` VALUES (1,'1234','redmi note 4x','xiaomi','android','192.168.0.134',1);
/*!40000 ALTER TABLE `phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (1,'/uploads/title_img.jpg'),(2,'/uploads/title_img2.jpg');
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('-Kia_AO-vQd9cR6GFLvO7mSYvz55qzR-',1525763742,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('10rC4H2oF8Ea5dXXTPP5bXTm32oD0lKy',1525763746,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('1Lm58vd6ESYb8q8bBcXd9oQ6KQDwGGS-',1525766086,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('2OyyU1eX7R6-6UgVzYd0otYtkcQIAE-p',1525763463,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('3HsS2J3vCZq4RQyN8zNyvTKxFx1PZZAE',1525763747,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('5UMno_XT37H70kRJbPG0MIBBahfgnd3C',1525763742,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('9-LGV7A5YMa0XyZC8PoGjwbGzABT1NaZ',1525763746,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('979RCDaiHFXkv0QjafwSKZ-tV7uiJFCg',1525763742,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('9PlxpGVMkCuHKFHydpmHfOxDqsOqpoPw',1525763746,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('9pnQVjIcNZ6CRi67o0zR9K_1VAStijO6',1525763741,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('E8dxpHV3GJsdjoNt_MUwi50mxbY0FNg3',1525763059,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('EVfUPVw2j1eKEx9ON8U3UfQdBMLGK_pd',1525763463,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('EYeb_qTC2K0cgCGIASaiyGstMb0j79vR',1525770059,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('F7IgBf4GhpW67fikh5MZsBoX8EB6ybzx',1525771548,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"auth\":true,\"phone\":\"89068513783\"}'),('GXrF11iC7iUGPSMt7tgSswUnjIT-v88P',1525763745,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('HEgWpc4x3mn0EESGSNVUchHhHUG8E0Ol',1525763742,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('ID_dAg9IHfoNL_XZjFtbXlVg0ARNaxKD',1525770046,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('MRo7YSRixGtAaJCFNWNLKGhmA2my0VCn',1525763746,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('MTgJy1ZrytibRQLNBPkPEr7YSNoHc-Lo',1525767538,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('MmU8UozYMYvmIXsCK2CF2kPHj8pRTuXy',1525763742,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('OAQhrMPC6exZr_CCqAgTXAyfbwEFjqyC',1525762923,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('PbnLI5w7yC-FkjMyyGQNFmn0aqtKqbyw',1525769997,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('Pf10GyIC_1fzWfmo7ZjTVQY2br-jPfJs',1525770071,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('RfaF1yWjP7l_krVxOXt3aGbyHIvO_Alg',1525763745,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('RtmRAO-H4v7DkFsh5ADrzHi9g5c_aL43',1525763742,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('S-o0wOwaGBA96xdGskTVYjoXKyi7wvVK',1525763748,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('SNQG6o2tgbkeYrDzs7gtt-u6pQlpeUiN',1525770047,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('SXR4OP44I0fD01LdvQC4wkArLj_9znj_',1525763742,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('SmTWl3N_JXu92D9RMp-GeAH6RRXh2y2q',1525766085,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('SoUw0x35hjjQOFppPUwZGj5tj6cUkmUm',1525770048,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('SuwzS2erMeL1HYl8BLAUlF_alARRCVH9',1525763748,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('VtZmWTd_CoJZ-HSQD0804R4OxA8BJpv3',1525763460,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('WVqOOkWZozDMYRbw6y11J2YI4ghsY2CY',1525770048,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('YizMZX5wDHnivv2RJUnIsrsY5oyBgCh7',1525763746,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('ZHqGgbR1mONXJHc311cXeZ2XewwsECj7',1525767538,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('ZpeW7fBcQc_4R_Gu4R47GV4F5726ntiI',1525763741,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('_XQqDo0mzqOQgBnJZM-p-lKudxphci7V',1525763748,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('_s30vcL7E6aFoa5PpN1UpRdvFA6gADot',1525763394,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('bUIp9z2NPYvv-sdVOY54AaWnQbd7Rvq1',1525763327,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('bYTwgPhN21ozJHjNouDpsk2ytoyIFZOu',1525763123,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('cTwsHFIkxu7kfuZ8PmkVBDiFWjR7Eufq',1525769956,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('d1K0eayt5DbpklWUX773Cn7XL_yHlsjl',1525770048,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('fbeVMxuXrOONQv15FjdAdQmBmxHkEDAS',1525770048,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('hVP9lu8Z_thMBFYCmPjZQssc2pTiTu7S',1525763748,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('htj8CmsmNsKqiTKNfX22u1M0oC75V49k',1525772435,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('iBTkAQVWE-iS7u5hKcXTxKXjvw4v8vMY',1525763230,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('jOtSuRoSDrO4nITvhWarkR4lIh6IR2nf',1525763748,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('jOuJhPgJzkgu3as3Y3zXGe5iuLZja3NC',1525763749,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('kVElrzlC8qOvQSDH5B6rHh1oOYu9o305',1525763462,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('ls-llnXslaXCtoLuIwG5B6Gij27ohSuI',1525763746,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('myLm7x9tfOM3-MmeOBM0ym_CSiM7rVxQ',1525763746,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('n0w3p21eIUIyHbM3tis_9itFAi1YVS-7',1525763741,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('oszxp-yzvEwOF_1AtIOGuOdceIMpD_AL',1525770047,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('p7F85lWEkuOlrcHV21s232M0UZpm8ZAY',1525763742,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('quAvRVDh6i4JmiFTNjW9jNpZVoU_nLL7',1525770055,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('r9cAN_xT09pHz_p0QsrmUskk6yKb3dBM',1525769947,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('rH9HQIs0ECK1_S-rJKsE97C_jAvBtZfe',1525769956,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('rU1iSCxwsFJfNl_l4C46yc7yWhXvclW6',1525772435,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('rmSNOZqvZXB6APxLizDntbx1bLjKE3dG',1525769996,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('s9OLIWg5tkq3T9C0suynjPi4ektKPLoI',1525762949,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('t-S7K3NlVOvn1BXvPlJ92WZrtJNudZwZ',1525763742,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('tC4Wv2oXfeK1Jhn-Jbva0XsUBOk1NvjE',1525763461,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('tVcx0m62YF-c1tukIWzHPCpIqxJBoyLh',1525763741,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('tbd1bGfTt5oGaLIb5c4p71qBZVEfnVAM',1525763464,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('twGtCqZdgHZwvxg0fy3M5fWe7ADOlbRX',1525770047,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('u_pYAIEQ94rANbalIzL45WLXr8R8jg9E',1525763740,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('v9-Iz8wRc8XK9MxrTjIfhocu2bMAHNwI',1525763462,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('wEsXoO9Loo0fOJhaLzK9gLoaLCJvZB1D',1525763462,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('xuR9aM-deQhcCUXaNtOmiY1L_H2-iEBT',1525770044,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('yn1J2tSkoos93qtPQU9CtImhZES-diyB',1525769947,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('z6_7OBCg_XlzlXnksSZyhVrnyUx-1L1C',1525770045,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}'),('z9o9uBuAcdtl3KXFUxTcRuDX2Po7zZUb',1525763741,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `surname` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `second_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `pass` varchar(200) NOT NULL,
  `tmp_code` int(200) DEFAULT NULL,
  `b_date` date NOT NULL,
  `active` int(2) NOT NULL DEFAULT '1',
  `id_phone` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'asd','asd','asd','asd@asd.ry','123','1231234',6067,'2018-04-14',0,0),(5,'йцу','фыв','ячс','asd@asd.ry','123456789','c20ad4d76fe97759aa27a0c99bff6710',2684,'2018-04-01',0,0),(7,'Иванов','Иван','Иванович','pingvin166@yandex.ru','89068513780','e10adc3949ba59abbe56e057f20f883e',NULL,'1998-06-16',1,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-07 14:45:17
