import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { v4 as uuidv4 } from "uuid";
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";
import openURL from "../utils/OpenURL";
import db from "@react-native-async-storage/async-storage";
import axios from "../constants/AxiosClient";
import Spinner from "react-native-loading-spinner-overlay";
import { useIsFocused } from "@react-navigation/native";
import { requestNews } from "../utils/getNews";
import * as dayjs from "dayjs"

const MOCK_JOBS = [
  {
    company: "BD ENC",
    location: "Seattle, Washington",
    name: "Program Test Manager",
    desc:
      "Role: Program Test Manager Location: Southend(Currently Remote) Duration: 6 Months Job Specs: Role Description Project manager for External Test Management service. Working within",
    link: "https://techtoday.azurewebsites.net",
  },
  {
    company: "BD ENC",
    location: "Seattle, Washington",
    name: "Program Test Manager",
    desc:
      "Role: Program Test Manager Location: Southend(Currently Remote) Duration: 6 Months Job Specs: Role Description Project manager for External Test Management service. Working within",
    link: "https://techtoday.azurewebsites.net",
  },
  {
    company: "BD ENC",
    location: "Seattle, Washington",
    name: "Program Test Manager",
    desc:
      "Role: Program Test Manager Location: Southend(Currently Remote) Duration: 6 Months Job Specs: Role Description Project manager for External Test Management service. Working within",
    link: "https://techtoday.azurewebsites.net",
  },
  {
    company: "BD ENC",
    location: "Seattle, Washington",
    name: "Program Test Manager",
    desc:
      "Role: Program Test Manager Location: Southend(Currently Remote) Duration: 6 Months Job Specs: Role Description Project manager for External Test Management service. Working within",
    link: "https://techtoday.azurewebsites.net",
  },
  {
    company: "BD ENC",
    location: "Seattle, Washington",
    name: "Program Test Manager",
    desc:
      "Role: Program Test Manager Location: Southend(Currently Remote) Duration: 6 Months Job Specs: Role Description Project manager for External Test Management service. Working within",
    link: "https://techtoday.azurewebsites.net",
  },
  {
    company: "BD ENC",
    location: "Seattle, Washington",
    name: "Program Test Manager",
    desc:
      "Role: Program Test Manager Location: Southend(Currently Remote) Duration: 6 Months Job Specs: Role Description Project manager for External Test Management service. Working within",
    link: "https://techtoday.azurewebsites.net",
  },
  {
    company: "BD ENC",
    location: "Seattle, Washington",
    name: "Program Test Manager",
    desc:
      "Role: Program Test Manager Location: Southend(Currently Remote) Duration: 6 Months Job Specs: Role Description Project manager for External Test Management service. Working within",
    link: "https://techtoday.azurewebsites.net",
  },
  {
    company: "BD ENC",
    location: "Seattle, Washington",
    name: "Program Test Manager",
    desc:
      "Role: Program Test Manager Location: Southend(Currently Remote) Duration: 6 Months Job Specs: Role Description Project manager for External Test Management service. Working within",
    link: "https://techtoday.azurewebsites.net",
  },
];

const TopicJobs = ({route, navigation}) => {
  const [news, setNews] = useState(null)
  const [jobs, setJobs] = useState(null)

  const newsMounted = useIsFocused()


  useEffect(() => {
    setUser(null);
    const makeRequest = async () => {
      const jwt = await db.getItem("jwt");

      if (jwt) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "auth-token": jwt,
          },
        };
        const request = await axios.get("/api/v1/users/auth", config);
        setUser(request?.data);
      } else {
        navigation.navigate("Login");
      }
    };
    makeRequest().catch((error) => {
      if (!error.message.includes("500")) {
        navigation.navigate("Login");
      }
    });
  }, [navigation]);

  

  return (
    <View style={{ backgroundColor: "white" }}>
      <Text style={styles.topicTitle}>{route.params.topicName} Jobs</Text>
      <ScrollView style={styles.wrapper}>
        {MOCK_JOBS.map((newsItem) => {
          const company = newsItem.company;
          const location = newsItem.location;
          const title = newsItem.name;
          const desc = newsItem.desc;
          const link = newsItem.link;
          return (
            <View key={uuidv4()} style={styles.newsItem}>
              <View style={styles.stats}>
                <Text style={styles.stat}>{company}</Text>
                <Text style={styles.stat}>{location}</Text>
              </View>
              <Text style={styles.newsTitle}>{title}</Text>
              <Text style={styles.newsDescription}>{desc}</Text>
              <Text
                onPress={() => {
                  openURL(link);
                }}
                style={styles.newsBTN}
              >
                View Full Job
              </Text>
            </View>
          );
        })}
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={styles.showMore}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Show More
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "white",
  },

  topicTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
  },

  newsItem: {
    textAlign: "center",
    backgroundColor: "#f7f7f7",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },

  stat: {
    fontWeight: "500",
    fontSize: 13,
    textAlign: "center",
  },

  newsTitle: {
    fontSize: 21,
    marginTop: 10,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
  },

  newsDescription: {
    textAlign: "center",
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#808080",
  },

  newsBTN: {
    textAlign: "center",
    backgroundColor: PRIMARY_COLOR,
    flex: 1,
    width: null,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color: "white",
    fontSize: 15,
  },

  showMore: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 4,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 50,
  },
});

export default TopicJobs;
