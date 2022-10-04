USE castleKeeper_db;

INSERT INTO departments (id, department) VALUES ("1", "Royalty");

INSERT INTO
    departments (id, department)
VALUES ("2", "Castle Staff");

INSERT INTO departments (id, department) VALUES ("3", "Knights");

INSERT INTO
    roles (id, title, salary, depId)
VALUES ("1", "King", "1000000", "1");

INSERT INTO
    roles (id, title, salary, depId)
VALUES ("2", "Beef Eater", "50000", "2");

INSERT INTO
    roles (id, title, salary, depId)
VALUES (
        "3",
        "Kings Guard",
        "80000",
        "3"
    );

INSERT INTO
    employees (
        id,
        firstName,
        lastName,
        roleId,
        managerId
    )
VALUES (
        "1",
        "Jack",
        "Daniels",
        "1",
        NULL
    );

INSERT INTO
    employees (
        id,
        firstName,
        lastName,
        roleId,
        managerId
    )
VALUES (
        "2",
        "Shirley",
        "Temple",
        "2",
        "1"
    );

INSERT INTO
    employees (
        id,
        firstName,
        lastName,
        roleId,
        managerId
    )
VALUES ("3", "Bud", "Knight", "2", "4");