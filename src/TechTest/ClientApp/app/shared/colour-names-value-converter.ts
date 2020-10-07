import { IColour } from '../people/interfaces/icolour';

export class ColourNamesValueConverter {

  toView(colours: IColour[]) {

    // TODO: Step 4
    //
    // Implement the value converter function.
    // Using the colours parameter, convert the list into a comma
    // separated string of colour names. The names should be sorted
    // alphabetically and there should not be a trailing comma.
    //
    // Example: 'Blue, Green, Red'

      var sorted = colours.sort((a,b) =>a.name < b.name ? -1 :1);
      var list = " ";

     


      var i;
      for (i = 0; i < sorted.length; i++) {
          list = list + sorted[i]['name']
          if (i + 1 != sorted.length) {
              list = list + ",";
          };
      }
      

      return list;
  }

}
