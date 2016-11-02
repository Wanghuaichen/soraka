/*
* 功能: 异步方式封装http调用
* --Mondooo
*/
export default ($q, $state) => {
	'ngInject';

	var TOKEN_KEY = 'x-auth-token';
	
	return {
		httpGet: (resource, parameters, headers) => {
			return $q((resolve, reject) => {
				resource(headers).get(parameters,
				(value, responseHeaders) => {
					value.headers = responseHeaders ? responseHeaders() : "";
					resolve(value);
				}, 
				(httpResponse) => {
					reject(httpResponse);
				});
			});
			/* // This is an example using deferred like promise implementation.
			* var deferred = $q.defer();
			* resource(headers).get(parameters,
			* 	(value, responseHeaders) => {
			* 		deferred.resolve(value);
			* 	}, 
			* 	(httpResponse) => {
			* 		deferred.resolve(httpResponse);
			* 	});
			* return deferred.promise;
			*/
		},
		httpGetWithToken: (resource, parameters, headers) => {
			return $q((resolve, reject) => {
				headers[TOKEN_KEY] = $sessionStorage[TOKEN_KEY];
				resource(headers).get(parameters,
				(value, responseHeaders) => {
					value.headers = responseHeaders ? responseHeaders() : "";
					resolve(value);
				}, 
				(httpResponse) => {
					reject(httpResponse);
				});
			});
		},
		httpPost: (resource, parameters, headers, body) => {
			return $q((resolve, reject) => {
				resource(headers).post(parameters,body,
				(value, responseHeaders) => {
					value.headers = responseHeaders ? responseHeaders() : "";
					resolve(value);
				}, 
				(httpResponse) => {
					reject(httpResponse);
				});
			});
		},
	};
};