import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";
import openURL from "../utils/OpenURL";
import { TopicsList } from "../constants/TopicInfo";
import { v4 as uuidv4 } from "uuid";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const FAKE_CHANGE_PASSWORD_INTERNAL_TOKEN =
  "ksfjsdfsajflkejrjkfjdskflsadkfjljdsjksdajdsksklsjdj";

const Settings = () => {
  const [user, setuser] = useState({
    name: "Bharadwaj Duggaraju",
    email: "bharadwaj.duggaraju@outlook.com",
    topics: ["Finance", "Business"],
    jobsDefCount: 9,
    newsDefCount: 9,
  });
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.mainSettingsWrapper}>
        <Text style={styles.topSettings}>Account Settings</Text>

        <Formik
          initialValues={{ email: "", name: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formWrapper}>
              <View style={styles.form}>
                <Text style={styles.welcome}>Profile</Text>
                <Text style={styles.label}>Your Name</Text>
                <TextInput
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  style={styles.input}
                  placeholder={user.name}
                />
                <Text style={styles.label}>Your Email</Text>
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  style={styles.input}
                  placeholder={user.email}
                />
                <Text
                  style={{ marginTop: 10, textAlign: "left", color: "#cb4745" }}
                  onPress={() => {
                    openURL(
                      `https://techtoday.azurewebsites.net/change-password/${FAKE_CHANGE_PASSWORD_INTERNAL_TOKEN}?from=app`
                    );
                  }}
                >
                  Change Password
                </Text>
                <TouchableHighlight
                  style={{
                    backgroundColor: "#cb4745",
                    marginTop: 15,
                    borderRadius: 20,
                  }}
                >
                  <Text
                    onPress={handleSubmit}
                    title="Submit"
                    style={styles.registerBTN}
                  >
                    Delete Account
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{
                    backgroundColor: "#cb4745",
                    marginTop: 15,
                    borderRadius: 20,
                  }}
                >
                  <Text
                    onPress={handleSubmit}
                    title="Submit"
                    style={styles.registerBTN}
                  >
                    Update Profile
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          )}
        </Formik>
        <Formik
          initialValues={{
            jobsDefCount: user.jobsDefCount,
            newsDefCount: user.newsDefCount,
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formWrapper}>
              <View style={styles.form}>
                <Text style={styles.welcome}>Preferences</Text>
                <Text style={styles.label}>Topics (Check At Least One)</Text>
                {TopicsList.map((topic) => {
                  return (
                    <View key={uuidv4()}>
                      <BouncyCheckbox
                        size={25}
                        fillColor="red"
                        unfillColor="#FFFFFF"
                        text={topic}
                        iconStyle={{ borderColor: "black" }}
                        onPress={(isChecked) => {
                          
                        }}
                        textStyle={{
                          textDecorationLine: "none",
                          color: "black",
                        }}
                        style={{ marginTop: 10 }}
                        fillColor="black"
                        isChecked={user.topics.includes(topic)}
                      />
                    </View>
                  );
                })}
                <Text style={styles.label}>Jobs Default Count (1-9)</Text>
                <TextInput
                  onChangeText={handleChange("jobsDefCount")}
                  onBlur={handleBlur("jobsDefCount")}
                  value={values.jobsDefCount}
                  style={styles.input}
                 
                />
                <Text style={styles.label}>News Default Count (1-9)</Text>
                <TextInput
                  onChangeText={handleChange("newsDefCount")}
                  onBlur={handleBlur("newsDefCount")}
                  value={values.newsDefCount}
                  style={styles.input}
          
                />
                
                <TouchableHighlight
                  style={{
                    backgroundColor: "#cb4745",
                    marginTop: 15,
                    borderRadius: 20,
                  }}
                >
                  <Text
                    onPress={handleSubmit}
                    title="Submit"
                    style={styles.registerBTN}
                  >
                    Update Preferences
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "white",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 6,
    textAlign: "center",
    shadowColor: "black",
    shadowOpacity: 0.9,
    elevation: 10,
    marginTop: 20,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  tinyLogo: {
    width: 50,
    height: 55,
  },

  welcome: {
    marginTop: 5,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  continue: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    textAlign: "center",
  },

  label: {
    textAlign: "left",
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: 10,
    height: 30,
    borderRadius: 4,
    paddingLeft: 4,
    textAlign: "center"
  },

  registerBTN: {
    color: "white",
    backgroundColor: PRIMARY_COLOR,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5,
    textAlign: "center",
  },
  already: {
    marginTop: 15,
    textAlign: "left",
  },
  aspecial: {
    color: PRIMARY_COLOR,
    marginLeft: 5,
    marginTop: 15,
  },

  mainSettingsWrapper: {
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    boxShadow: "1px 1px 2px 2px rgba(0,0,0,0.1)",
  },

  topSettings: {
    backgroundColor: "white",
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "lightgray",
    borderBottomWidth: 3,
    fontWeight: "500",
    shadowColor: "black",
    shadowOpacity: 1.9,
    elevation: 10,
  },
});
