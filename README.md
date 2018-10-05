# {Service Name}
{Add Description here}

# Pre-requisites

1. Node.js v6.5.0 or later.
2. Serverless CLI v1.9.0 or later. You can run
3. npm install -g serverless  - to install it.
4. An AWS account.
5. Set-up your Provider Credentials. 
   https://wiki.corp.adobe.com/pages/createpage.action?spaceKey=svt&fromPageId=1459443906

# setup

1. npm install
2. npm run package
3. serverless deploy --stage [dev/staging/prod]

# dbconfig
1. Edit your database credentials in `config/env.json`

# dependencies
1.  "ajv": "^6.0.1",
2.  "mysql2": "^1.5.1",
3.  "sequelize": "^4.32.1" 

# dev-dependencies

1. "babel-cli": "^6.26.0",
2. "babel-preset-env": "^1.6.0",
3. "babel-plugin-async-to-promises": "^1.0.5",
4. "babel-preset-es2015": "^6.24.1",
5. "eslint": "^4.6.1",
6. "eslint-config-google": "^0.9.1"

# More details:

Refer package.json for detials build details & serverless.yml for deployment detials. 
https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/