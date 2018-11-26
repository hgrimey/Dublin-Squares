-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 05, 2018 at 02:09 PM
-- Server version: 5.7.21
-- PHP Version: 7.1.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `dublin_squares`
--

-- --------------------------------------------------------

--
-- Table structure for table `HOUSE_HEADINGS`
--

CREATE TABLE `HOUSE_HEADINGS` (
  `ID` int(50) NOT NULL,
  `houseInfoId` int(50) NOT NULL,
  `houseTextHeading` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `HOUSE_HEADINGS`
--

INSERT INTO `HOUSE_HEADINGS` (`ID`, `houseInfoId`, `houseTextHeading`) VALUES
(1, 1, '(91) Heading One'),
(2, 1, '(91) Heading Two'),
(3, 1, '(91) Heading Three'),
(4, 1, '(91) Heading Four\r\n'),
(5, 2, '(92) Heading One'),
(6, 2, '(92) Heading Two'),
(7, 2, '(92) Heading Three'),
(8, 2, '(92) Heading Four');

-- --------------------------------------------------------

--
-- Table structure for table `HOUSE_IMAGE`
--

CREATE TABLE `HOUSE_IMAGE` (
  `ID` int(50) NOT NULL,
  `houseInfoId` int(50) NOT NULL,
  `houseImageURL` varchar(255) NOT NULL,
  `imagePlacement` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `HOUSE_IMAGE`
--

INSERT INTO `HOUSE_IMAGE` (`ID`, `houseInfoId`, `houseImageURL`, `imagePlacement`) VALUES
(1, 1, 'img1/gif-07.png', 'titleImage'),
(2, 1, 'img1/number92.png', 'secondImage'),
(3, 1, 'img1/SirOrmsby.jpg', 'thirdImage'),
(4, 1, 'img1/SirLambertOrmsby.jpg', 'fourthImage'),
(5, 2, 'img1/gif-07.png', 'titleImage'),
(6, 2, 'img1/number92.png', 'secondImage'),
(7, 2, 'img1/SirOrmsby.jpg', 'thirdImage'),
(8, 2, 'img1/SirLambertOrmsby.jpg', 'fourthImage');

-- --------------------------------------------------------

--
-- Table structure for table `HOUSE_INFO`
--

CREATE TABLE `HOUSE_INFO` (
  `ID` int(50) NOT NULL,
  `houseTitle` varchar(255) NOT NULL,
  `houseImgURL` varchar(50) NOT NULL,
  `houseInfo` text NOT NULL,
  `family` text NOT NULL,
  `stories` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `HOUSE_INFO`
--

INSERT INTO `HOUSE_INFO` (`ID`, `houseTitle`, `houseImgURL`, `houseInfo`, `family`, `stories`) VALUES
(1, '(id 1) Number 91', 'img1/gif-07.png', '(id 1) 91 info Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', '(id 1) 91 Family Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', '(id 1) 91 stories Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
(2, '(id 2) Number 92', 'img1/gif-07.png', '(id 2) 92 info Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', '(id 2) 92 Family Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', '(id 2) 92 stories Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ');

-- --------------------------------------------------------

--
-- Table structure for table `HOUSE_TIMELINE`
--

CREATE TABLE `HOUSE_TIMELINE` (
  `ID` int(50) NOT NULL,
  `houseInfoId` int(50) NOT NULL,
  `houseTime` int(50) NOT NULL,
  `timelineText` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `HOUSE_TIMELINE`
--

INSERT INTO `HOUSE_TIMELINE` (`ID`, `houseInfoId`, `houseTime`, `timelineText`) VALUES
(1, 1, 1900, '91 1900 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
(2, 1, 1910, '91 1910 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
(3, 1, 1920, '91 1900 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
(4, 1, 1930, '91 1900 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
(5, 1, 1940, '91 1940 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
(6, 1, 1950, '91 1950 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

-- --------------------------------------------------------

--
-- Table structure for table `IMAGE_MAP`
--

CREATE TABLE `IMAGE_MAP` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imageURL` varchar(10000) NOT NULL,
  `isMain` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `IMAGE_MAP`
--

INSERT INTO `IMAGE_MAP` (`id`, `name`, `imageURL`, `isMain`) VALUES
(1, 'merrionmap', 'img1/image-map-ipad1.png', 1),
(3, 'birdsEyeViewM', 'img1/birdsEyeViewMerrion.png', 0),
(4, 'westTerrace', 'img1/merrionSquareWest.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `IMAGE_MAP_AREA`
--

CREATE TABLE `IMAGE_MAP_AREA` (
  `ID` int(11) NOT NULL,
  `imageMapId` int(11) NOT NULL,
  `shape` varchar(50) NOT NULL,
  `coords` varchar(255) NOT NULL,
  `linkType` varchar(50) NOT NULL,
  `destination` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `IMAGE_MAP_AREA`
--

INSERT INTO `IMAGE_MAP_AREA` (`ID`, `imageMapId`, `shape`, `coords`, `linkType`, `destination`) VALUES
(1, 1, 'poly', '697, 66, 948, 219, 868, 347, 620, 203', 'map', 3),
(2, 3, 'rect', '128, 145, 268, 377', 'map', 4),
(3, 4, 'rect', '510, 255, 593, 499', 'house', 1),
(4, 4, 'rect', '598, 255, 677, 498', 'house', 2);

-- --------------------------------------------------------

--
-- Table structure for table `PAGE_CONTAINER`
--

CREATE TABLE `PAGE_CONTAINER` (
  `ID` int(50) NOT NULL,
  `containerImageURL` varchar(255) NOT NULL,
  `containerHeader` text NOT NULL,
  `containerParagraph` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `PAGE_CONTAINER`
--

INSERT INTO `PAGE_CONTAINER` (`ID`, `containerImageURL`, `containerHeader`, `containerParagraph`) VALUES
(1, 'img/dublinArchival.jpg', 'Header One', 'Paragraph 1 - Lorem ipsum dolor sit uip ex ea commodo consequat.');

-- --------------------------------------------------------

--
-- Table structure for table `SIDE_MENU`
--

CREATE TABLE `SIDE_MENU` (
  `ID` int(50) NOT NULL,
  `terraceName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `SIDE_MENU`
--

INSERT INTO `SIDE_MENU` (`ID`, `terraceName`) VALUES
(1, 'North'),
(2, 'South'),
(3, 'East'),
(4, 'West');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `HOUSE_HEADINGS`
--
ALTER TABLE `HOUSE_HEADINGS`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_HEADINGS_HOUSE_INFO` (`houseInfoId`);

--
-- Indexes for table `HOUSE_IMAGE`
--
ALTER TABLE `HOUSE_IMAGE`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_HOUSE_IMAGE_HOUSE_INFO` (`houseInfoId`);

--
-- Indexes for table `HOUSE_INFO`
--
ALTER TABLE `HOUSE_INFO`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `HOUSE_TIMELINE`
--
ALTER TABLE `HOUSE_TIMELINE`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_HOUSE_TIMELINE_HOUSE_INFO` (`houseInfoId`);

--
-- Indexes for table `IMAGE_MAP`
--
ALTER TABLE `IMAGE_MAP`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `IMAGE_MAP_AREA`
--
ALTER TABLE `IMAGE_MAP_AREA`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_IMAGE_MAP_AREA_IMAGE_MAP` (`imageMapId`);

--
-- Indexes for table `PAGE_CONTAINER`
--
ALTER TABLE `PAGE_CONTAINER`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `SIDE_MENU`
--
ALTER TABLE `SIDE_MENU`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `HOUSE_HEADINGS`
--
ALTER TABLE `HOUSE_HEADINGS`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `HOUSE_INFO`
--
ALTER TABLE `HOUSE_INFO`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `HOUSE_TIMELINE`
--
ALTER TABLE `HOUSE_TIMELINE`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `IMAGE_MAP`
--
ALTER TABLE `IMAGE_MAP`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `IMAGE_MAP_AREA`
--
ALTER TABLE `IMAGE_MAP_AREA`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `PAGE_CONTAINER`
--
ALTER TABLE `PAGE_CONTAINER`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `SIDE_MENU`
--
ALTER TABLE `SIDE_MENU`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `HOUSE_HEADINGS`
--
ALTER TABLE `HOUSE_HEADINGS`
  ADD CONSTRAINT `FK_HEADINGS_HOUSE_INFO` FOREIGN KEY (`houseInfoId`) REFERENCES `HOUSE_INFO` (`ID`);

--
-- Constraints for table `HOUSE_IMAGE`
--
ALTER TABLE `HOUSE_IMAGE`
  ADD CONSTRAINT `FK_HOUSE_IMAGE_HOUSE_INFO` FOREIGN KEY (`houseInfoId`) REFERENCES `HOUSE_INFO` (`ID`);

--
-- Constraints for table `HOUSE_TIMELINE`
--
ALTER TABLE `HOUSE_TIMELINE`
  ADD CONSTRAINT `FK_HOUSE_TIMELINE_HOUSE_INFO` FOREIGN KEY (`houseInfoId`) REFERENCES `HOUSE_INFO` (`ID`);

--
-- Constraints for table `IMAGE_MAP_AREA`
--
ALTER TABLE `IMAGE_MAP_AREA`
  ADD CONSTRAINT `FK_IMAGE_MAP_AREA_IMAGE_MAP` FOREIGN KEY (`imageMapId`) REFERENCES `IMAGE_MAP` (`id`);
