-- Generate a new cattery
INSERT INTO `cattery`
  (`name`, `own_id`)
VALUES
  ('place holder name', 1);
--   ($creator_user_name, $cattery_name_input);

-- Generate a new cat
INSERT INTO `cat`
  (`name`, `owner_id`, `color_id`, `cattery_id`)
VALUES
  ('place holder name', 1, 1, 1);
--   ($cat_name_input, $user_id_input, $color_id_input, $cattery_id_input);

-- Make a cat into an adult cat
UPDATE `cat`
SET `age` = True
WHERE `id`= 1;
-- WHERE `id`=$changed_id;

-- Link an owner to a cattery
INSERT INTO `visiting`
  (`owner_id`, `cattery_id`)
VALUES
  (1, 1);
--   ($owner_id_input, $cattery_id_input);

-- Increase a cat’s feed stat after they are fed
UPDATE `cat`
SET `feed_stat` = `feed_stat` + 1
WHERE `id` = 1;
-- WHERE `id` = $changed_id;

-- Increase a cat’s play stat after they are played with
UPDATE `cat`
SET `play_stat` = `play_stat` + 1
WHERE `id` = 1;
-- WHERE `id` = $changed_id;

-- Increase a cat’s groom stat after they are groomed
UPDATE `cat`
SET `groom_stat` = `groom_stat` + 1
WHERE `id` = 1;
-- WHERE `id` = $changed_id;

-- Create a new user
INSERT INTO `user`
  (`name`, `password`)
VALUES
  ('name', 'password');
--   ($username_input, $hashed_password_input);
