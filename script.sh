#!/bin/bash
yum update -y
yum install httpd -y
systemctl start httpd
systemctl enable httpd 
echo "<h1>Hello Classess " > /var/www/html/index.html
