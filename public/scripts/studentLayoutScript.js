/* SELECT2 */

$(document).ready(function() {
  $(".select2_multiple").select2({
    allowClear: true
  });

  $('#tags_team_strength_1').tagsInput({
    height:'37px',
    width: 'auto',
    defaultText:'Strength',
  });

  $('#tags_team_weakness_1').tagsInput({
    height:'37px',
    width: 'auto',
    defaultText:'Weakness',
  });
});
