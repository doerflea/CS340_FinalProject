             
-- --------------------------------------------------------
-- Table structure for table `color`

CREATE TABLE `color` (
  `Id` int(11) NOT NULL,
  `Description` mediumtext DEFAULT NULL,
  `Img_filepath_kitten` varchar(255) DEFAULT NULL,
  `img_filepath_adult` varchar(255) NOT NULL
);

ALTER TABLE `color`
  ADD PRIMARY KEY (`Id`);

ALTER TABLE `color`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

--
-- Data for table `color`
--
INSERT INTO `color` (`Id`, `Description`, `Img_filepath_kitten`, `img_filepath_adult`) VALUES
(0, 'white', 'images/white-kitten.jpg', 'images/white-adult.jpg'),
(1, 'orange', 'images/orange-kitten.jpg', 'images/orange-adult.jpg'),
(2, 'siamese', 'images/siamese-kitten.jpg', 'images/siamese-adult.jpg');


----------------------------------------------------------
-- Table structure for table `user`

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
);

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

--
-- Sample data for table `user`
--
INSERT INTO `user` (`id`, `password`, `username`) VALUES
(1, 'cats', 'kevin'),
(4, 'test', 'test');

----------------------------------------------------------
-- Table structure for table `cattery`

CREATE TABLE `cattery` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `own_id` int(11) NOT NULL
);

--
--Sample data for table 'cattery'
--
INSERT INTO `cattery` (`id`, `name`, `own_id`) VALUES
(1, 'changed name', 1),
(2, 'theothercats', 1),
(3, 'cattery', 4),
(4, 'extra new name', 4);

----------------------------------------------------------
-- Table structure for table `cat`

CREATE TABLE `cat` (
  `id` int(11) NOT NULL,
  `feed_stat` int(11) NOT NULL DEFAULT 0,
  `groom_stat` int(11) NOT NULL DEFAULT 0,
  `play_stat` int(11) NOT NULL DEFAULT 0,
  `owner_id` int(11) DEFAULT 0,
  `color_id` int(11) DEFAULT NULL,
  `cattery_id` int(11) DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL
);

--
--Sample data for table 'cat'
--
INSERT INTO `cat` (`id`, `feed_stat`, `groom_stat`, `play_stat`, `owner_id`, `color_id`, `cattery_id`, `img_path`) VALUES
(707, 0, 0, 0, 1, 0, 1, 'images/white-kitten.jpg'),
(708, 2, 2, 2, 1, 2, 2 'images/siamese-kitten.jpg'),
(709, 2, 2, 2, 4, 1, 3, 'images/orange-kitten.jpg'),
(710, 2, 2, 0, 4, 1, 4, 'images/orange-kitten.jpg');


----------------------------------------------------------
-- Table structure for table `visiting`


CREATE TABLE `visiting` (
  `owner_id` int(11) DEFAULT NULL,
  `cattery_id` int(11) DEFAULT NULL
);

ALTER TABLE `visiting`
  ADD KEY `fk_owner_id` (`owner_id`),
  ADD KEY `fk_cattery_id` (`cattery_id`);

ALTER TABLE `visiting`
  ADD CONSTRAINT `fk_cattery_id` FOREIGN KEY (`cattery_id`) REFERENCES `cattery` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

--
--Sample data for table 'visiting'
--
INSERT INTO `visiting` (`owner_id`, `cattery_id`) VALUES
(4, 1),
(4, 2),
(1, 3);




