-- MySQL dump 10.15  Distrib 10.0.34-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: dead
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
-- Table structure for table `akts`
--

DROP TABLE IF EXISTS `akts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `akts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `emp` int(100) DEFAULT NULL,
  `degree` int(100) DEFAULT NULL,
  `group` int(100) DEFAULT NULL,
  `item` int(100) DEFAULT NULL,
  `contract` int(100) DEFAULT NULL,
  `type` int(100) DEFAULT NULL,
  `time` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `akts`
--

LOCK TABLES `akts` WRITE;
/*!40000 ALTER TABLE `akts` DISABLE KEYS */;
INSERT INTO `akts` VALUES (1,'2018-06-13 19:00:00.000000',1,5,2,2,2,0,2),(2,'2018-06-06 19:00:00.000000',1,1,1,1,2,0,0),(3,'2018-06-06 19:00:00.000000',1,1,1,1,2,0,1),(4,'2018-06-06 19:00:00.000000',1,1,1,1,2,0,2),(5,'2018-05-28 19:00:00.000000',1,7,1,1,3,1,0),(6,'2018-05-28 19:00:00.000000',1,7,1,1,3,1,1),(7,'2018-05-28 19:00:00.000000',1,7,1,1,3,1,3),(8,'2018-06-21 19:00:00.000000',1,1,1,1,4,1,1),(9,'2018-05-31 19:00:00.000000',2,5,3,3,5,1,3);
/*!40000 ALTER TABLE `akts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cathedra`
--

DROP TABLE IF EXISTS `cathedra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cathedra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cathedra`
--

LOCK TABLES `cathedra` WRITE;
/*!40000 ALTER TABLE `cathedra` DISABLE KEYS */;
INSERT INTO `cathedra` VALUES (1,'8a'),(2,'Tatuin'),(3,'Я не знаю даже что такое кафедра'),(4,'119b');
/*!40000 ALTER TABLE `cathedra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contract`
--

DROP TABLE IF EXISTS `contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contract` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `emp` int(100) DEFAULT NULL,
  `degree` int(100) DEFAULT NULL,
  `group` int(100) DEFAULT NULL,
  `item` int(100) DEFAULT NULL,
  `input` int(100) DEFAULT NULL,
  `input_FIO` varchar(150) DEFAULT NULL,
  `input_date` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  `input_num` int(100) DEFAULT NULL,
  `words` varchar(150) DEFAULT NULL,
  `num` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contract`
--

LOCK TABLES `contract` WRITE;
/*!40000 ALTER TABLE `contract` DISABLE KEYS */;
INSERT INTO `contract` VALUES (2,'2018-06-19 19:00:00.000000',1,3,3,3,1,'123','2018-06-07 19:00:00.000000',1231226,'[\"2\",\"1\",\"5\",\"8\",\"5\",\"6\",\"3\",\"2\",\"1\",\"5\",\"4\",\"8\",\"9\",\"8\"]',23),(3,'2018-05-31 19:00:00.000000',1,3,3,3,0,NULL,'0000-00-00 00:00:00.000000',NULL,'[\"2\",\"1\",\"4\",\"5\",\"6\",\"9\",\"8\",\"7\",\"5\",\"5\",\"2\",\"3\",\"6\",\"7\"]',1),(4,'2018-06-07 19:00:00.000000',1,1,1,1,0,NULL,'0000-00-00 00:00:00.000000',NULL,'[\"2\",\"1\",\"4\",\"5\",\"8\",\"9\",\"6\",\"3\",\"7\",\"8\",\"5\",\"4\",\"1\",\"2\"]',123),(5,'2018-06-13 19:00:00.000000',2,4,2,2,0,NULL,'0000-00-00 00:00:00.000000',NULL,'[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\"]',12);
/*!40000 ALTER TABLE `contract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `degree`
--

DROP TABLE IF EXISTS `degree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `degree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `degree`
--

LOCK TABLES `degree` WRITE;
/*!40000 ALTER TABLE `degree` DISABLE KEYS */;
INSERT INTO `degree` VALUES (1,'Магистр'),(2,'Мастер-Джедай'),(3,'Доктор'),(4,'Доктор Стрендж'),(5,'Ах, выпендриваться будем?'),(6,'Человек паук'),(7,'Бакалавр');
/*!40000 ALTER TABLE `degree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp`
--

DROP TABLE IF EXISTS `emp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `surname` varchar(200) DEFAULT NULL,
  `middle_name` varchar(200) DEFAULT NULL,
  `phone` varchar(200) DEFAULT NULL,
  `id_degree` int(200) DEFAULT NULL,
  `cathedra` int(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `admin` int(200) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp`
--

LOCK TABLES `emp` WRITE;
/*!40000 ALTER TABLE `emp` DISABLE KEYS */;
INSERT INTO `emp` VALUES (1,'Владимир','Попытаев','Николаевич','89068513783',2,2,'fcea920f7412b5da7be0cf42b8c93759','pingvin166@yandex.ru',1),(2,'Дмитрий','Фролов','Александрович','7894566565',4,3,'e10adc3949ba59abbe56e057f20f883e','test@test2.ru',1);
/*!40000 ALTER TABLE `emp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_group` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'ППрК-14-1'),(2,'ЦкКПСС-17-1'),(3,'ГуЛАГ-42-1'),(4,'ГуЛАГ-42-2');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_item` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Программирование'),(2,'Фихтование'),(3,'Сетевые Технологии');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('MJ-4LsyKeo3t-QMjHn23AswH5QkLoQN_',1528862202,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"auth\":true,\"phone\":\"89068513783\",\"emp\":{\"id\":1,\"name\":\"Владимир\",\"surname\":\"Попытаев\",\"middle_name\":\"Николаевич\",\"phone\":\"89068513783\",\"id_degree\":2,\"cathedra\":2,\"password\":\"fcea920f7412b5da7be0cf42b8c93759\",\"email\":\"pingvin166@yandex.ru\",\"admin\":1}}'),('klAM8Lk9_VBrN0XmWkhkEsZAd8Ajc6K2',1528881783,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"auth\":true,\"phone\":\"89068513783\",\"emp\":{\"id\":1,\"name\":\"Владимир\",\"surname\":\"Попытаев\",\"middle_name\":\"Николаевич\",\"phone\":\"89068513783\",\"id_degree\":2,\"cathedra\":2,\"password\":\"fcea920f7412b5da7be0cf42b8c93759\",\"email\":\"pingvin166@yandex.ru\",\"admin\":1}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-12 15:38:46
