Do the following steps to setup csr and crts.

Download gitbash, if you are on windows. You shall be better off.

### To generate csr

`openssl req -new -newkey rsa:2048 -nodes -out localhost.csr -keyout private.key`

### To generate crts
#openssl rsa -in private.key -out new.cert.key
#openssl x509 -in localhost.csr -out new.cert.cert -req -signkey new.cert.key -days 1

`openssl x509 -in localhost.csr -out primary.cert -req -signkey private.key -days 1`
