@extends ('template')

@section ('default')
<div class="title-lvl-2-container"><h3 class="title-lvl-2">Fees</h3></div>
<table class="sa-table">
<colgroup>
	<col />
	<col />
	<col />
	<col />
	<col />
</colgroup>
<thead>
	<tr>
		<th class="base">Building</th>
		<th>Amenities</th>
		<th>Rates</th>
		<th>Rating</th>
		<th class="show">Address</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Plex</td>
		<td>
			<li>Air Conditioning </li>
			<li>Doors</li>
			<li>Windows</li>
			<li>Kitchen</li>
			<li>Pets</li>
		</td>
		<td>$300</td>
		<td>3</td>
		<td>Evanston</td>
	</tr>
	<tr>
		<td>Willard</td>
		<td>
			<li>Air Conditioning </li>
			<li>Doors</li>
			<li>Windows</li>
			<li>Kitchen</li>
			<li>Pets</li>
		</td>
		<td>$1000</td>
		<td>4</td>
		<td>Chicago</td>
	</tr>
	<tr>
		<td>Sargent</td>
		<td>
			<li>Air Conditioning </li>
			<li>Doors</li>
			<li>Windows</li>
			<li>Kitchen</li>
			<li>Pets</li>
		</td>
		<td>$208</td>
		<td>2</td>
		<td>Maple, Evanston</td>
	</tr>
	<tr>
		<td>Bobb</td>
		<td>
			<li>Air Conditioning </li>
			<li>Doors</li>
			<li>Windows</li>
			<li>Kitchen</li>
			<li>Pets</li>
		</td>
		<td>$392</td>
		<td>1</td>
		<td>What</td>
	</tr>
</tbody>
</table>
@stop