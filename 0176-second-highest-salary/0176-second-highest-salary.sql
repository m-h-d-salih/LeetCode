# Write your MySQL query statement below
with highSalary as (select max(salary) as salary from Employee)
select max(salary) as SecondHighestSalary from Employee
where salary < (select salary from highSalary);