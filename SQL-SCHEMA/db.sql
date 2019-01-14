use lokasigfox;

CREATE TABLE IF NOT EXISTS user (
  id VARCHAR(100) NOT NULL,
  name VARCHAR(45) NOT NULL,
  nickname VARCHAR(45) NULL,
  phone VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(100) NOT NULL,
  establishment_id VARCHAR(45) NULL,
  profile VARCHAR(45) NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX id_UNIQUE (id ASC),
  UNIQUE INDEX name_UNIQUE (name ASC),
  UNIQUE INDEX email_UNIQUE (email ASC))
ENGINE = InnoDB;

select * from user;

drop table user;
SET SQL_SAFE_UPDATES = 0;
delete from user;


CREATE TABLE IF NOT EXISTS toDoList (
  id INT NOT NULL AUTO_INCREMENT,
  description TEXT NOT NULL,
  done TINYINT(1) NOT NULL,
  start BIGINT NOT NULL,
  finish BIGINT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


select id, description, done, 
		from_unixtime(start) as start,
        from_unixtime(finish) as finish
        from toDoList;	

update lokasigfox.toDoList
set finish = unix_timestamp(now())
where id = 1;

update `toDoList` set `done` = true, `finish` = '1547485703' where `id` = '5';
update `toDoList` set `done` = false, `finish` = null where `id` = '5';

update lokasigfox.toDoList
set done = true
where id = 1;

update lokasigfox.toDoList
set done = true,
finish = 1547485703
where id = 4;




INSERT INTO lokasigfox.toDoList
	( description, done, start) VALUES
	('run script', false, 1547232447);

#'1547232447'
select from_unixtime(1547485703);

select unix_timestamp(now());
select now();