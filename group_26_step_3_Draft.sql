--Data Definition Queries:                   
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

--Sample Data:
--Creates 10 users                   
INSERT INTO `user`
  (`password`, `name`)
VALUES
  (`1111`, `User 1`),
  (`2222`, `User 2`),
  (`3333`, `User 3`),
  (`4444`, `User 4`),
  (`5555`, `User 5`),
  (`6666`, `User 6`),
  (`7777`, `User 7`),
  (`8888`, `User 8`),
  (`9999`, `User 9`),
  (`1010`, `User 10`);

--Creates a cattery for each user
INSERT INTO `cattery`
  (`name`, `own_id`)
VALUES (SELECT `id` FROM `user` WHERE `name`=`User 1`, `Cattery 1`),
  (SELECT `id` FROM `user` WHERE `name`=`User 2`, `Cattery 2`),
  (SELECT `id` FROM `user` WHERE `name`=`User 3`, `Cattery 3`),
  (SELECT `id` FROM `user` WHERE `name`=`User 4`, `Cattery 4`),
  (SELECT `id` FROM `user` WHERE `name`=`User 5`, `Cattery 5`),
  (SELECT `id` FROM `user` WHERE `name`=`User 6`, `Cattery 6`),
  (SELECT `id` FROM `user` WHERE `name`=`User 7`, `Cattery 7`),
  (SELECT `id` FROM `user` WHERE `name`=`User 8`, `Cattery 8`),
  (SELECT `id` FROM `user` WHERE `name`=`User 9`, `Cattery 9`),
  (SELECT `id` FROM `user` WHERE `name`=`User 10`, `Cattery 10`);

--Inserts 10 colors into the table, placeholder values so not reflective of final goal with project
INSERT INTO `color`
  (`Description`, `Img_path`)
VALUES (`This is red`, `colors/red`),
  (`This is blue`, `colors/blue`)
  (`This is yellow`, `colors/yellow`),
  (`This is green`, `colors/green`),
  (`This is purple`, `colors/purple`),
  (`This is orange`, `colors/orange`),
  (`This is white`, `colors/white`),
  (`This is black`, `colors/black`),
  (`This is grey`, `colors/grey`),
  (`This is cat`, `colors/cat`);

--Inserts 10 cats into the 10 catteries, users and catteries are given 0-2 cats
INSERT INTO `cat`
  (`owner_id`, `color_id`, `cattery_id`)
VALUES (SELECT `id` FROM user WHERE name=`User 1`,
  SELECT `id` FROM `color` WHERE `img_path`=`colors/red`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 1`),
  (SELECT `id` FROM user WHERE name=`User 1`,
  SELECT `id` FROM `color` WHERE `img_path`=`colors/blue`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 2`),
  (SELECT `id` FROM user WHERE name=`User 2`,
  SELECT `id` FROM `color` WHERE `img_path`=`colors/yellow`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 3`),
  (SELECT `id` FROM user WHERE name=`User 4`,
  SELECT `id` FROM `color` WHERE `img_path`=`colors/green`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 3`),
  (SELECT `id` FROM user WHERE name=`User 5`,
  SELECT `id` FROM `color` WHERE `img_path`=`colors/purple`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 5`),
  (SELECT `id` FROM user WHERE name=`User 6`,
  SELECT `id` FROM `color` WHERE `img_path`=`colors/orange`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 6`),
  (SELECT `id` FROM user WHERE name=`User 7`,
  SELECT `id` FROM `color` WHERE `img_path`=`colors/red`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 7`),
  (SELECT `id` FROM user WHERE name=`User 8`,
  SELECT `id` FROM `color` WHERE `img_path`=`colors/blue`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 8`),
  (SELECT `id` FROM user WHERE name=`User 8`,
  SELECT `id` FROM `color` WHERE `img_path`=`colors/red`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 8`),
  (SELECT `id` FROM user WHERE name=`User 10`,
  SELECT `id` FROM `color` WHERE `img_path`=`colors/orange`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 10`);

--Fill out visiting table, giving user n permissions to cattery n+1 and reflecting the cat insertions above
INSERT INTO `visiting`
  (`owner_id`, `cattery_id`)
VALUES (SELECT `id` FROM `user` WHERE name=`User 1`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 2`),
  (SELECT `id` FROM `user` WHERE name=`User 2`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 3`),
  (SELECT `id` FROM `user` WHERE name=`User 3`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 4`),
  (SELECT `id` FROM `user` WHERE name=`User 4`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 5`),
  (SELECT `id` FROM `user` WHERE name=`User 5`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 6`),
  (SELECT `id` FROM `user` WHERE name=`User 6`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 7`),
  (SELECT `id` FROM `user` WHERE name=`User 7`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 8`),
  (SELECT `id` FROM `user` WHERE name=`User 8`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 9`),
  (SELECT `id` FROM `user` WHERE name=`User 9`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 10`),
  (SELECT `id` FROM `user` WHERE name=`User 4`,
  SELECT `id` FROM `cattery` WHERE name=`Cattery 3`);


--Queries:
                   
-- Generate a new cattery
INSERT INTO `cattery`
  (`name`, `own_id`)
VALUES
  ($creator_user_name, $cattery_name_input);

-- Generate a new cat
INSERT INTO `cat`
  (`name`, `owner_id`, `color_id`, `cattery_id`)
VALUES
  ($cat_name_input, $user_id_input, $color_id_input, $cattery_id_input);

-- Make a cat into an adult cat
UPDATE `cat`
SET `age`=True
WHERE `id`=$changed_id;

-- Link an owner to a cattery
INSERT INTO `visiting`
  (`owner_id`, `cattery_id`)
VALUES
  ($owner_id_input, $cattery_id_input);

-- Increase a cat’s feed stat after they are fed
UPDATE `cat`
SET `feed_stat` = `feed_stat` + 1
WHERE `id`=$changed_id;

-- Increase a cat’s play stat after they are played with
UPDATE `cat`
SET `play_stat` = `play_stat` + 1
WHERE `id`=$changed_id;

-- Increase a cat’s groom stat after they are groomed
UPDATE `cat`
SET `groom_stat` = `groom_stat` + 1
WHERE `id`=$changed_id;

-- Create a new user
INSERT INTO `user`
  (`name`, `password`)
VALUES
  ($username_input, $hashed_password_input);

--Triggers, Views, Functions & Procedures (optional in Draft Version):
--Prevents users from increasing a cat’s stats past 3
CREATE TRIGGER cap_cat_stat
BEFORE UPDATE ON cat
BEGIN
    IF (NEW.feed_stat > 3)
        SET NEW.feed_stat := 3;
    END IF;
IF (NEW.play_stat > 3)
        SET NEW.play_stat := 3;
    END IF;
IF (NEW.groom_stat > 3)
        SET NEW.groom_stat := 3;
    END IF;
END;
