<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
                Our Works
                <v-btn @click="priceDialog = true" fab icon small>
                  <v-icon>mdi-currency-php</v-icon>
                </v-btn>
                
            </div>
            <div class="subtitle-1 font-weight-light">
              Example projects of our Web Developers
            </div>
          </template>
          
            <v-container pa-0 fluid>
              <v-row>
                <template v-for="(p, i) in projects">
                <v-col md="6" cols="12" :key="i">
              <v-card class="mx-auto">
                <v-toolbar :color="p.color">
                  <v-list-item>
                    <v-list-item-avatar color="grey">
                      <v-img :src="p.logo"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="title">{{
                        p.name
                      }}</v-list-item-title>
                      <v-list-item-subtitle
                        >@{{ p.projectBy }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-toolbar>
                <v-img :src="p.imageUrl" height="194"></v-img>
                <v-card-text>
                  <template v-for="(chip, j) in p.accomplishments">
                    <v-chip small class="ma-1" :key="j">
                      {{ chip }}
                    </v-chip>
                  </template>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="goTo(p.websiteUrl)" text :color="p.color" block
                    >Visit Website</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
            </template>
              </v-row>
            </v-container>
            
          
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <base-material-card
          class="v-card-profile"
          :avatar="me.avatar"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">
              {{me.position}}
            </h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              {{me.name}}
            </h4>

            <p class="font-weight-light grey--text">
              {{me.about}}
            </p>
            <v-icon large class="pl-4 pr-4">mdi-facebook</v-icon>
            <v-icon large class="pl-4 pr-4">mdi-email</v-icon>
            <v-icon large class="pl-4 pr-4">mdi-card-account-phone</v-icon>
          </v-card-text>
        </base-material-card>
      </v-col>
      <template v-for="(m, i) in members">
        <v-col :key="i"
        cols="12"
        md="4"
      >
        <base-material-card
          class="v-card-profile"
          :avatar="m.avatar"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">
              {{m.position}}
            </h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              {{m.name}}
            </h4>

            <p class="font-weight-light grey--text">
              {{m.about}}
            </p>
            <v-icon large class="pl-4 pr-4">mdi-facebook</v-icon>
            <v-icon large class="pl-4 pr-4">mdi-email</v-icon>
            <v-icon large class="pl-4 pr-4">mdi-card-account-phone</v-icon>
          </v-card-text>
        </base-material-card>
      </v-col>
      </template>
    </v-row>
    <v-dialog
      v-model="priceDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Website price
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="priceDialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    data() {
    return {//ongoing
    priceDialog: false,
      me: {
        avatar: "https://lh3.googleusercontent.com/NIOU1GhywE4NosStVn_pk4Ztrj0L1ZTTf_sEaE9uffzwzb2czCTmYHRXn21zESLSSV4bup2GM-2PH-Fz5se5ygIwmNRWGZQRJYVJ1PQPTxURQbwVfO8E9kM50KPKp5FsemjrEnh76A",
        position: "CEO / Lead Developer",
        name: "Rodelo Escueta Jr",
        about: "Hi! My name is Rodelo Escueta, and I'm a web developer at Cavite Philippines. If i'm not working at HRD Ichijo group of company , I'm working remotely on projects for my clients. I have diverse set of skills, ranging from design, to HTML + CSS + Javascript with Vuejs, all the way to Nodejs + Expressjs and AWS."
      },
      members: [
        {
        avatar: "https://lh3.googleusercontent.com/4EnRELh7BBVFqOdssOEHyeam-CZi_DUTfewsvoawqEMQMgcb2D9NPaHarOnZD0UaSD8a21ttF6z37yk6nyXr7JpdvRx8VyDWozIvWdGcHKudCmGxJ0uUEO0PFkaIm_etAbja1JxrPQ",
        position: "Core Member Developer",
        name: "Demsent",
        about: "Sint Lorem eu est occaecat duis tempor excepteur Lorem incididunt aliquip in ea."
      },
      {
        avatar: "https://lh3.googleusercontent.com/4EnRELh7BBVFqOdssOEHyeam-CZi_DUTfewsvoawqEMQMgcb2D9NPaHarOnZD0UaSD8a21ttF6z37yk6nyXr7JpdvRx8VyDWozIvWdGcHKudCmGxJ0uUEO0PFkaIm_etAbja1JxrPQ",
        position: "Core Member Developer",
        name: "Mics",
        about: "Sint Lorem eu est occaecat duis tempor excepteur Lorem incididunt aliquip in ea."
      },
      {
        avatar: "https://lh3.googleusercontent.com/4EnRELh7BBVFqOdssOEHyeam-CZi_DUTfewsvoawqEMQMgcb2D9NPaHarOnZD0UaSD8a21ttF6z37yk6nyXr7JpdvRx8VyDWozIvWdGcHKudCmGxJ0uUEO0PFkaIm_etAbja1JxrPQ",
        position: "Core Member Developer",
        name: "Hazel",
        about: "Sint Lorem eu est occaecat duis tempor excepteur Lorem incididunt aliquip in ea."
      },
      {
        avatar: "https://lh3.googleusercontent.com/4EnRELh7BBVFqOdssOEHyeam-CZi_DUTfewsvoawqEMQMgcb2D9NPaHarOnZD0UaSD8a21ttF6z37yk6nyXr7JpdvRx8VyDWozIvWdGcHKudCmGxJ0uUEO0PFkaIm_etAbja1JxrPQ",
        position: "Core Member Developer",
        name: "Narvin",
        about: "Sint Lorem eu est occaecat duis tempor excepteur Lorem incididunt aliquip in ea."
      },
      ],
      projects: [
        {
          name: "Company Notice",
          logo:
            "https://lh3.googleusercontent.com/I2SmSD1cXk2_efU4Ysv0ZJ7g0A859m3GABFpvU1V1kuboTsKKFGYODHKv2_U16SF0uMialUc1-63Ar6kZX9wQR_ryDOQdLlZK_EaFKBT4kFq-o5M1UA0wE6Ae_YnbgknMezM5noR",
          imageUrl:
            "https://lh3.googleusercontent.com/uCzbfVI6VurfpWbgUYHfJYcmhqlPxCHjMRXN_uwojvuvzW4v5aNJcWiWMNbv9XfBx_z-i1028p820A7I0MR0dyYaA6M4yFlRYoQ9gxJMkf13AWIIwGlrmT4yHn0DEcrdNQLNOleQ",
          projectBy: "HRD Ichijo",
          projectInfo:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          websiteUrl:
            "http://notice.hrd-s.com.s3-website.us-east-2.amazonaws.com/",
          color: "light-green lighten-3",
          accomplishments: [
            "Vue",
            "Node",
            "Express",
            "Webpack",
            "AWS Lambda",
            "AWS DynamoDB",
            "AWS SNS"
          ]
        },

        {
          name: "Company Plans",
          logo:
            "https://lh3.googleusercontent.com/I2SmSD1cXk2_efU4Ysv0ZJ7g0A859m3GABFpvU1V1kuboTsKKFGYODHKv2_U16SF0uMialUc1-63Ar6kZX9wQR_ryDOQdLlZK_EaFKBT4kFq-o5M1UA0wE6Ae_YnbgknMezM5noR",
          imageUrl:
            "https://lh3.googleusercontent.com/_GhdhYLa1q9qHyfhGI0cBDi1ykzflzTbqjd9FHzAq3E1ggwPdUcb1SoImBVVYTSJ-prNdssEGCzfFnPy7x98aBSp3xKoQlX2PZBhUebu2QmLDYFT9t2G7UWp-6xyDxNMldmh3W_N0Q",
          projectBy: "HRD Ichijo",
          projectInfo:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          websiteUrl: "http://plans.hrd-s.com/",
          color: "red lighten-3",
          accomplishments: [
            "Vue",
            "Vuex",
            "Node",
            "Express",
            "Webpack",
            "AWS Lambda",
            "AWS DynamoDB"
          ]
        },

        {
          name: "Blank Project",
          logo:
            "https://lh3.googleusercontent.com/I2SmSD1cXk2_efU4Ysv0ZJ7g0A859m3GABFpvU1V1kuboTsKKFGYODHKv2_U16SF0uMialUc1-63Ar6kZX9wQR_ryDOQdLlZK_EaFKBT4kFq-o5M1UA0wE6Ae_YnbgknMezM5noR",
          imageUrl:
            "https://lh3.googleusercontent.com/_GhdhYLa1q9qHyfhGI0cBDi1ykzflzTbqjd9FHzAq3E1ggwPdUcb1SoImBVVYTSJ-prNdssEGCzfFnPy7x98aBSp3xKoQlX2PZBhUebu2QmLDYFT9t2G7UWp-6xyDxNMldmh3W_N0Q",
          projectBy: "HRD Ichijo",
          projectInfo:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          websiteUrl: "http://plans.hrd-s.com/",
          color: "blue lighten-3",
          accomplishments: [
            "Vue",
            "Vuex",
            "Node",
            "Express",
            "Webpack",
            "AWS Lambda",
            "AWS DynamoDB"
          ]
        },
        {
          name: "Blank Project",
          logo:
            "https://lh3.googleusercontent.com/I2SmSD1cXk2_efU4Ysv0ZJ7g0A859m3GABFpvU1V1kuboTsKKFGYODHKv2_U16SF0uMialUc1-63Ar6kZX9wQR_ryDOQdLlZK_EaFKBT4kFq-o5M1UA0wE6Ae_YnbgknMezM5noR",
          imageUrl:
            "https://lh3.googleusercontent.com/_GhdhYLa1q9qHyfhGI0cBDi1ykzflzTbqjd9FHzAq3E1ggwPdUcb1SoImBVVYTSJ-prNdssEGCzfFnPy7x98aBSp3xKoQlX2PZBhUebu2QmLDYFT9t2G7UWp-6xyDxNMldmh3W_N0Q",
          projectBy: "HRD Ichijo",
          projectInfo:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          websiteUrl: "http://plans.hrd-s.com/",
          color: "blue lighten-3",
          accomplishments: [
            "Vue",
            "Vuex",
            "Node",
            "Express",
            "Webpack",
            "AWS Lambda",
            "AWS DynamoDB"
          ]
        }
      ]
    };
  }
  }
</script>
