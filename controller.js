const { SAML } = require('@node-saml/node-saml');
var parseString = require('xml2js').parseString;
const STANDARD_TIER = 'standard'

module.exports.samlLogin = async (req, res) => {
    console.log('Logging in...', req.body)
    let orgId = req.query.orgId ? req.query.orgId : req.headers.subdomain
    let tier = req.headers.tier
        const config=
    const SamlConfig={
    EntryPoint: 'https://dev-12691359.okta.com/app/dev-12691359_saml2_1/exk89fzq1a6D7w3re5d7/sso/saml',
    CallbackUrl: 'http://localhost:3000/auth/callback',
    Issuer: 'http://www.okta.com/exk89fzq1a6D7w3re5d7',
    Audience: 'http://localhost:3000/auth/callback',
    Cert: 'MIIDqDCCApCgAwIBAgIGAYYwHJFsMA0GCSqGSIb3DQEBCwUAMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEUMBIGA1UECwwLU1NPUHJvdmlkZXIxFTATBgNVBAMMDGRldi0xMjY5MTM1OTEcMBoGCSqGSIb3DQEJARYNaW5mb0Bva3RhLmNvbTAeFw0yMzAyMDgwODE5MjRaFw0zMzAyMDgwODIwMjNaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEUMBIGA1UECwwLU1NPUHJvdmlkZXIxFTATBgNVBAMMDGRldi0xMjY5MTM1OTEcMBoGCSqGSIb3DQEJARYNaW5mb0Bva3RhLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAPMV0bSUteRXtq5JC/nfOtGe7oVN5PtC4OMAkr5mWqS2QmFbn+DPdgo/Ya2QZe+Cdx+TuW0JpJzKgpRTjKQ4j4okiLfMLJXpjwZsYSJc0y/nqMBURroNCSYIUfOQbX6vyuJS9b6G5GsiVXNpH/xuOF0cWZ4s2S8K0Sg+MqhMnoBMK8ObxS3qd2t6H6goyZwrMAgU4MDAKS7TiFxCuXe3wuhidW2p0XwR8B15kDeAvsnFKTjXen9bcEla3wZDitr2jl0jEPBOnogZ411TSpgvgtS8sRrvag0bpdPQHOL87P77fDkKnvATMVR3VnxA7sR4ybvdL0BtaBltuP+uUHvQgJkCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAOfJ9gp4PeEoaBIeb6RHZPW2bLaWiH7uoEEu3mDFlD1IGwX43P8l6mDovUk1+01vlNM+oLe0UOeeJmtun0epLv7TnuelT3RqHPI1EvxvW0uAKsIbX01herIkS8ZRjBys7gcrXJQbFOR4QL91yaM8XcXoWkPJYnmHXEkzz2gIZeSRw61+cTS2Dh5CRU7zV+it/5eBFVfL4U4qirXR8afXVq/2hvmFsl8Ad3FHz+wJX7SHEDO988xXIzseNWAJ6xyomsHwWK5KaG84n4vsH31EgClCY+Qac8EEYhb/x7Du48UPRmWxEmyFujioMZ/aifeLGGltdOwIq5KK5NiCxYJO4gA=='
    }
        const samlParser = new SAML({
            entryPoint: SamlConfig.EntryPoint,
            callbackUrl: SamlConfig.CallbackUrl,
            issuer: SamlConfig.Issuer,
            audience: SamlConfig.Audience,
            cert: SamlConfig.Cert,

        });
        let response = await samlParser.getAuthorizeUrlAsync(createRequest(req), {})
        console.log(response);
        res.redirect(entryPoint + response.split(entryPoint)[1])
    } else {
        res.redirect('https://)
    }
};
const createRequest = event => ({
    query: {
        RelayState: "https://admin.eprinitsaas.org",
    },
});
