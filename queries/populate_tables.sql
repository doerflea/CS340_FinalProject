--Creates 10 users
INSERT INTO `user`
  (`password`, `name`)
VALUES
  ('1111', 'User 1'),
  ('2222', 'User 2'),
  ('3333', 'User 3'),
  ('4444', 'User 4'),
  ('5555', 'User 5'),
  ('6666', 'User 6'),
  ('7777', 'User 7'),
  ('8888', 'User 8'),
  ('9999', 'User 9'),
  ('1010', 'User 10');

-- Creates a cattery for each user
INSERT INTO `cattery`
  (`own_id`, `name`)
VALUES
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 1'), 'Cattery 1'),
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 2'), 'Cattery 2'),
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 3'), 'Cattery 3'),
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 4'), 'Cattery 4'),
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 5'), 'Cattery 5'),
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 6'), 'Cattery 6'),
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 7'), 'Cattery 7'),
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 8'), 'Cattery 8'),
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 9'), 'Cattery 9'),
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 10'), 'Cattery 10');

--Inserts 10 colors into the table, placeholder values so not reflective of final goal with project
INSERT INTO `color`
  (`description`, `img_path`)
VALUES
  ('This is red', 'colors/red'),
  ('This is blue', 'colors/blue'),
  ('This is yellow', 'colors/yellow'),
  ('This is green', 'colors/green'),
  ('This is purple', 'colors/purple'),
  ('This is orange', 'colors/orange'),
  ('This is white', 'colors/white'),
  ('This is black', 'colors/black'),
  ('This is grey', 'colors/grey'),
  ('This is cat', 'colors/cat');

--Inserts 10 cats into the 10 catteries, users and catteries are given 0-2 cats
INSERT INTO `cat`
  (`owner_id`, `color_id`, `cattery_id`, `name`)
VALUES
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 1'),
  (SELECT `color`.`id` FROM `color` WHERE `color`.`img_path`='colors/red'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 1'),
  'cat'),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 1'),
  (SELECT `color`.`id` FROM `color` WHERE `color`.`img_path`='colors/blue'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 2'),
  'cat'),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 2'),
  (SELECT `color`.`id` FROM `color` WHERE `color`.`img_path`='colors/yellow'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 3'),
  'cat'),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 4'),
  (SELECT `color`.`id` FROM `color` WHERE `color`.`img_path`='colors/green'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 3'),
  'cat'),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 5'),
  (SELECT `color`.`id` FROM `color` WHERE `color`.`img_path`='colors/purple'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 5'),
  'cat'),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 6'),
  (SELECT `color`.`id` FROM `color` WHERE `color`.`img_path`='colors/orange'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 6'),
  'cat'),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 7'),
  (SELECT `color`.`id` FROM `color` WHERE `color`.`img_path`='colors/red'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 7'),
  'cat'),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 8'),
  (SELECT `color`.`id` FROM `color` WHERE `color`.`img_path`='colors/blue'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 8'),
  'cat'),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 8'),
  (SELECT `color`.`id` FROM `color` WHERE `color`.`img_path`='colors/red'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 8'),
  'cat'),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 10'),
  (SELECT `color`.`id` FROM `color` WHERE `color`.`img_path`='colors/orange'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 10'),
  'cat');

--Fill out visiting table, giving user n permissions to cattery n+1 and reflecting the cat insertions above
INSERT INTO `visiting`
  (`owner_id`, `cattery_id`)
VALUES
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 1'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 2')),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 2'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 3')),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 3'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 4')),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 4'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 5')),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 5'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 6')),
  
  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 6'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 7')),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 7'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 8')),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 8'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 9')),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 9'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 10')),

  ((SELECT `user`.`id` FROM `user` WHERE `user`.`name`='User 4'),
  (SELECT `cattery`.`id` FROM `cattery` WHERE `cattery`.`name`='Cattery 3'));
