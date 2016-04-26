1. docker run -P -d --name z_redis z_redis:0.1

2. redis-cli -h 127.0.0.1 -p 32768
set zhaoic t123
get zhaoic

3. ssh root@127.0.0.1 -p 32769
