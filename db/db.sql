CREATE TABLE bible_spanish(
    bible_id varchar(20) PRIMARY KEY NOT NULL,
    bible_name varchar(200) not null
);

CREATE TABLE bible_english(
    bible_id varchar(20) PRIMARY KEY NOT NULL,
    bible_name varchar(200) not null
);

CREATE TABLE books_spanish(
    id varchar(10) PRIMARY KEY NOT NULL,
    book_name varchar(20) not null,
    chapters_num int
);

CREATE TABLE verses_spanish(
    verso varchar(255) not null,
    book_name varchar(20) not null,
    chapter_number int not null,
    order_number int not null,
    bood_id varchar(10)
);



INSERT INTO bible_spanish (bible_id, bible_name) VALUES ('RVR1960', 'Biblia Reina Valera 1960');

INSERT INTO bible_english (bible_id, bible_name) VALUES ('ESV', 'English Standard Version 2016');