module.exports = {
  server: {
    url: 'ldap://104.131.95.219:389',
    adminDn: 'cn=admin,dc=test,dc=com',
    adminPassword: 'admin',
    searchBase: 'cn=users,ou=groups,dc=test,dc=com',
    searchFilter: '(uid={{username}})'
  }
}