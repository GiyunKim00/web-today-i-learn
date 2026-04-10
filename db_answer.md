# 공통 - DB 실습
## 0. 초기 세팅
CREATE TABLE attendance (
attendance_id INT NOT NULL AUTO_INCREMENT,
crew_id INT NOT NULL,
nickname VARCHAR(50) NOT NULL,
attendance_date DATE NOT NULL,
start_time TIME,
end_time TIME,
PRIMARY KEY (attendance_id)
);

INSERT INTO attendance (crew_id, nickname, attendance_date, start_time, end_time) VALUES

-- 검프(crew_id=1)
(1, '검프', '2025-03-04', '09:45', '18:10'),
(1, '검프', '2025-03-05', '09:50', '18:05'),
(1, '검프', '2025-03-06', '09:59', '18:02'),
(1, '검프', '2025-03-07', '10:00', '18:05'),
(1, '검프', '2025-03-10', '12:55', '18:10'),
(1, '검프', '2025-03-11', '09:58', '18:03'),
(1, '검프', '2025-03-12', '09:55', '18:05'),

-- 구구(crew_id=2)
(2, '구구', '2025-03-04', '10:01', '18:01'),
(2, '구구', '2025-03-05', '09:59', '18:00'),
(2, '구구', '2025-03-06', '09:58', '17:30'),
(2, '구구', '2025-03-07', '10:10', '18:00'),
(2, '구구', '2025-03-11', '09:59', '18:01'),
(2, '구구', '2025-03-12', '10:02', '18:10'),

-- 네오(crew_id=3)
(3, '네오', '2025-03-04', '09:59', '18:00'),
(3, '네오', '2025-03-05', '10:03', '18:15'),
(3, '네오', '2025-03-07', '10:00', '17:50'),
(3, '네오', '2025-03-10', '13:05', '18:10'),
(3, '네오', '2025-03-12', '09:55', '18:00'),

-- 브라운(crew_id=4)
(4, '브라운', '2025-03-04', '09:59', '18:00'),
(4, '브라운', '2025-03-05', '09:59', '18:00'),
(4, '브라운', '2025-03-06', '10:00', '18:00'),
(4, '브라운', '2025-03-07', '10:00', '18:00'),
(4, '브라운', '2025-03-10', '13:00', '18:00'),
(4, '브라운', '2025-03-11', '09:59', '18:00'),
(4, '브라운', '2025-03-12', '09:59', '18:00'),

-- 브리(crew_id=5)
(5, '브리', '2025-03-04', '10:20', '18:10'),
(5, '브리', '2025-03-05', '09:58', '18:02'),
(5, '브리', '2025-03-06', '09:59', '18:00'),
(5, '브리', '2025-03-07', '10:02', '18:00'),
(5, '브리', '2025-03-11', '09:55', '18:00'),
(5, '브리', '2025-03-12', '09:57', '18:05'),

-- 포비(crew_id=6)
(6, '포비', '2025-03-04', '10:15', '17:58'),
(6, '포비', '2025-03-05', '10:05', '18:05'),
(6, '포비', '2025-03-10', '13:10', '18:10'),
(6, '포비', '2025-03-11', '09:52', '18:01'),
(6, '포비', '2025-03-12', '09:59', '18:00'),

-- 워니(crew_id=7)
(7, '워니', '2025-03-04', '10:10', '18:10'),
(7, '워니', '2025-03-05', '09:50', '18:02'),
(7, '워니', '2025-03-10', '12:59', '18:05'),
(7, '워니', '2025-03-12', '10:05', '17:00'),

-- 리사(crew_id=8)
(8, '리사', '2025-03-04', '09:55', '18:00'),
(8, '리사', '2025-03-05', '10:01', '18:03'),
(8, '리사', '2025-03-06', '10:10', '17:40'),
(8, '리사', '2025-03-07', '10:02', '18:05'),
(8, '리사', '2025-03-10', '13:02', '18:00'),
(8, '리사', '2025-03-11', '10:05', '18:10'),
(8, '리사', '2025-03-12', '10:03', '18:00'),

-- 제임스(crew_id=9)
(9, '제임스', '2025-03-04', '09:55', '18:00'),
(9, '제임스', '2025-03-05', '09:59', '18:00'),
(9, '제임스', '2025-03-06', '09:59', '18:10'),
(9, '제임스', '2025-03-07', '10:05', '18:00'),
(9, '제임스', '2025-03-10', '12:59', '17:50'),
(9, '제임스', '2025-03-11', '09:55', '18:00'),
(9, '제임스', '2025-03-12', '10:01', '18:00'),

-- 류시(crew_id=10)
(10, '류시', '2025-03-04', '10:04', '18:00'),
(10, '류시', '2025-03-05', '10:02', '18:02'),
(10, '류시', '2025-03-06', '09:45', '18:05'),
(10, '류시', '2025-03-07', '10:10', '18:00'),
(10, '류시', '2025-03-10', '13:03', '17:40'),
(10, '류시', '2025-03-11', '09:57', '18:10'),
(10, '류시', '2025-03-12', '09:59', '17:30'),

-- 디노(crew_id=11)
(11, '디노', '2025-03-04', '09:59', '18:00'),
(11, '디노', '2025-03-05', '10:10', '18:00'),
(11, '디노', '2025-03-06', '09:57', '18:05'),
(11, '디노', '2025-03-07', '10:00', '18:03'),
(11, '디노', '2025-03-10', '12:57', '18:00'),
(11, '디노', '2025-03-11', '09:55', '18:00'),
(11, '디노', '2025-03-12', '10:03', '18:05'),

-- 시지프(crew_id=12)
(12, '시지프', '2025-03-04', '09:52', '18:05'),
(12, '시지프', '2025-03-05', '09:55', '18:00'),
(12, '시지프', '2025-03-06', '10:15', '18:00'),
(12, '시지프', '2025-03-07', '10:03', '17:59'),
(12, '시지프', '2025-03-10', '12:58', '18:10'),
(12, '시지프', '2025-03-11', '09:55', '18:00'),
(12, '시지프', '2025-03-12', '10:10', '18:10');

## 문제 1. 테이블 생성하기 (CREATE TABLE)

### 1-1. attendance 테이블에서 중복되는 컬럼
-- crew_id와 nickname이 중복된다.

### 1-2. crew 테이블 구성
-- crew_id와 nickname으로 구성한다.

### 1-3. crew 테이블에 들어갈 크루 정보 추출
SELECT DISTINCT `crew_id`, `nickname`
FROM `attendance`;

### 1-4. crew 테이블 생성
CREATE TABLE `crew` (
`crew_id` INT NOT NULL,
`nickname` VARCHAR(50) NOT NULL,
PRIMARY KEY (`crew_id`)
);

### 1-5. attendance에서 crew 정보 추출해서 삽입
INSERT INTO `crew` (`crew_id`, `nickname`)
SELECT DISTINCT
`crew_id`,
`nickname`
FROM `attendance`;

## 문제 2. 테이블 컬럼 삭제하기 (ALTER TABLE)

### 2-1. attendance에서 불필요해지는 컬럼
-- nickname.
-- crew_id로 crew 테이블에서 nickname을 찾을 수 있으므로.

### 2-2. 컬럼 삭제
ALTER TABLE `attendance`
DROP COLUMN `nickname`;

## 문제 3. 외래키 설정하기

ALTER TABLE `attendance`
ADD CONSTRAINT `fk_attendance_crew`
FOREIGN KEY (`crew_id`)
REFERENCES `crew`(`crew_id`);

## 문제 4. 유니크 키 설정

ALTER TABLE `crew`
ADD CONSTRAINT `uk_crew_nickname`
UNIQUE (`nickname`);

## 문제 5. 크루 닉네임 검색하기 (LIKE)

SELECT *
FROM `crew`
WHERE `nickname` LIKE '디%';

## 문제 6. 출석 기록 확인하기 (SELECT + WHERE)

SELECT a.*
FROM `attendance` AS a
JOIN `crew` AS c
ON a.`crew_id` = c.`crew_id`
WHERE c.`nickname` = '어셔'
AND a.`attendance_date` = '2025-03-06';

## 문제 7. 누락된 출석 기록 추가 (INSERT)

INSERT INTO `crew` (`crew_id`, `nickname`)
VALUES (13, '어셔');
INSERT INTO `attendance` (`crew_id`, `attendance_date`, `start_time`, `end_time`)
VALUES (
(SELECT `crew_id` FROM `crew` WHERE `nickname` = '어셔'),
'2025-03-06',
'09:31',
'18:01'
);

## 문제 8. 잘못된 출석 기록 수정 (UPDATE)

UPDATE `attendance` AS a
JOIN `crew` AS c ON a.`crew_id` = c.`crew_id`
SET a.`start_time` = '10:00'
WHERE c.`nickname` = '주니'
AND a.`attendance_date` = '2025-03-12';

## 문제 9. 허위 출석 기록 삭제 (DELETE)

DELETE FROM `attendance`
WHERE `crew_id` = (
SELECT `crew_id`
FROM `crew`
WHERE `nickname` = '아론'
)
AND `attendance_date` = '2025-03-12';

## 문제 10. 출석 정보 조회하기 (JOIN)

SELECT
a.`attendance_id`,
c.`nickname`,
a.`attendance_date`,
a.`start_time`,
a.`end_time`
FROM `attendance` AS a
JOIN `crew` AS c
ON a.`crew_id` = c.`crew_id`;

## 문제 11. nickname으로 쿼리 처리하기 (서브쿼리)

SELECT *
FROM `attendance`
WHERE `crew_id` = (
SELECT `crew_id`
FROM `crew`
WHERE `nickname` = '네오'
);

## 문제 12. 가장 늦게 하교한 크루 찾기

SELECT c.`nickname`, a.`end_time`
FROM `attendance` AS a
JOIN `crew` AS c
ON a.`crew_id` = c.`crew_id`
WHERE a.`attendance_date` = '2025-03-05'
ORDER BY a.`end_time` DESC
LIMIT 1;

## 문제 13. 크루별로 '기록된' 날짜 수 조회

SELECT c.`nickname`, COUNT(a.`attendance_date`) AS `recorded_days`
FROM `crew` AS c
LEFT JOIN `attendance` AS a
ON c.`crew_id` = a.`crew_id`
GROUP BY c.`crew_id`, c.`nickname`
ORDER BY c.`crew_id`;

## 문제 14. 크루별로 등교 기록이 있는(start_time IS NOT NULL) 날짜 수 조회

SELECT c.`nickname`, COUNT(a.`start_time`) AS `attendance_days`
FROM `crew` AS c
LEFT JOIN `attendance` AS a
ON c.`crew_id` = a.`crew_id`
GROUP BY c.`crew_id`, c.`nickname`
ORDER BY c.`crew_id`;

## 문제 15. 날짜별로 등교한 크루 수 조회

SELECT `attendance_date`, COUNT(*) AS `attendance_count`
FROM `attendance`
WHERE `start_time` IS NOT NULL
GROUP BY `attendance_date`
ORDER BY `attendance_date`;

## 문제 16. 크루별 가장 빠른 등교 시각(MIN)과 가장 늦은 등교 시각(MAX)

SELECT c.`nickname`,
MIN(a.`start_time`) AS `first_start_time`,
MAX(a.`start_time`) AS `last_start_time`
FROM `crew` AS c
LEFT JOIN `attendance` AS a
ON c.`crew_id` = a.`crew_id`
GROUP BY c.`crew_id`, c.`nickname`
ORDER BY c.`crew_id`;