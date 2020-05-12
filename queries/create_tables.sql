CREATE TABLE `color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text(65535),
  `img_path` varchar(255),
  PRIMARY KEY (`id`)
);


CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `cattery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `own_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`own_id`) REFERENCES `user` (`id`)
);


CREATE TABLE `cat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `feed_stat` int(11) NOT NULL DEFAULT 0,
  `groom_stat` int(11) NOT NULL DEFAULT 0,
  `play_stat` int(11) NOT NULL DEFAULT 0,
  `owner_id` int(11) DEFAULT 0,
  `color_id` int(11),
  `cattery_id` int(11),
  `age` bool NOT NULL DEFAULT False,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`),
  FOREIGN KEY (`cattery_id`) REFERENCES `cattery` (`id`),
  FOREIGN KEY (`color_id`) REFERENCES `color` (`id`)
);


CREATE TABLE `visiting` (
  `owner_id` int(11),
  `cattery_id` int(11),
  FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`),
  FOREIGN KEY (`cattery_id`) REFERENCES `cattery` (`id`)
);
