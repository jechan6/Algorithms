# Vertical vs Horizontal Scaling
    - Vertical: Add more memory, cpu, hard drive to existing host
    - Horizontal: Keep one host small, but add another host or machine.
    - Horizontal: Can keep adding more host
# CAP Theorem
    - Consistency: Read has most recent rite
    - Availibility: Will get response back but might be most recent write or not most recent write.
    - Partition Tolerance: Can drop network packets between two nodes but the system will continue to wrun despite packets or messages being dropped.
    Cap Theorem says that it is impossible for a distributed computer system to simultaneously provide all three. Can only have 2 our of the 3.

    One must choose between consistency and availabitliy. No distributed system is safe from network failures, network partitioning has to be tolerated. So you must choose between consistency and availibility.

    Traditional relation database choose consistency over availability. NoSQL prefer availability over consistency

# ACID vs BASE
    - ACID is more used in relational database, BASE is used in nosQL database
    - Atomicitiy, Consistency, Isolation, Durability
    - ACID is a set of properities of database transactions intended to guarantee validity.
    - Atomicity - guarantees each transaction is treated as single unit, if a statement in a transaction fails, entire transaction fails.
    - Consitency - ensures that a transaction can only bring database from one valid state to another. Any transaction must change data only in allowed ways, any data written must be valid according to all defind rules.
    - Durability - Once a transaction has been commited, it will remain commited regardless of system failure.
# BASE 
    - Basicalliy available: mostly available. Even if one node fails, system still operational
    - Soft state : state don't have to be write-consistent or mutualy consistent all the time.
    - Eventual consistency - System will become consistent over time. given that system doesn't receive input during that time. Will ripple through to all servers.

