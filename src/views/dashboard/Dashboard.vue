<template>
  <v-container id="regular-tables" fluid tag="section">
    <!-- <base-v-component heading="Simple Tables" link="components/simple-tables" /> -->
    <!-- delete this later  -->
    <v-row>
      <v-col cols="12" md="4">
        <base-material-card
          icon="mdi-xml"
          title="Web Developer"
          class="px-5 py-3"
          to="/pages/webdev"
        >
          <v-divider />
          <v-card flat height="100">
            <span class="Subtitle 1"
              >Aliqua commodo non voluptate voluptate ullamco minim Lorem culpa
              nisi quis consequat.
            </span>
          </v-card>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="4">
        <base-material-card
          icon="mdi-access-point-network"
          title="Network Provider"
          class="px-5 py-3"
        >
          <v-divider />
          <v-card flat height="100">
            <span class="Subtitle 1"
              >Aliqua commodo non voluptate voluptate ullamco minim Lorem culpa
              nisi quis consequat.Aliqua commodo non voluptate voluptate ullamco minim Lorem culpa
              nisi quis consequat.
            </span>
          </v-card>
        </base-material-card>
      </v-col>
      <v-col cols="12" md="4">
        <base-material-card
          color="grey"
          icon="mdi-post-outline"
          title="Blogs"
          class="px-5 py-3"
        >
          <v-divider />
          <v-card flat height="100">
            <span class="Subtitle 1"
              >Get smarter about what matters to you. Select what you're into.
              We'll help you find great things to read.</span
            >
          </v-card>
        </base-material-card>
      </v-col>
      <v-col cols="12" md="4">
        <base-material-card
          color="grey"
          icon="mdi-school-outline"
          title="Online Courses"
          class="px-5 py-3"
        >
          <v-divider />
          <v-card flat height="100">
            <span class="Subtitle 1"
              >Aliqua commodo non voluptate voluptate ullamco minim Lorem culpa
              nisi quis consequat.
            </span>
          </v-card>
        </base-material-card>
      </v-col>
      <v-col cols="12" md="4">
        <base-material-card
          color="grey"
          icon="mdi-store-outline"
          title="Online Store"
          class="px-5 py-3"
        >
          <v-divider />
          <v-card flat height="100">
            <span class="Subtitle 1"
              >STAY HOME AND SHOP ONLINE. You're too pretty to have to look for
              a parking spot.</span
            >
          </v-card>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashBoard',
    methods:{
    }
  }
</script>